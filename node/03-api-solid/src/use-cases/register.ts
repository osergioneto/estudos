import { prisma } from "@/lib/prisma"
import { UsersRepository } from "@/repositories/users-repository"
import { hash } from "bcryptjs"
import { UserAlreadyExistisError } from "./errors/user-already-exists-error"

interface RegisterUserCaseRequest {
    name: string
    email: string
    password: string
}

export class RegisterUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute({ name, email, password }: RegisterUserCaseRequest) {
        const emailAlreadyExists = await this.usersRepository.findByEmail(email)

        if (emailAlreadyExists) {
            throw new UserAlreadyExistisError()
        }

        const password_hash = await hash(password, 8)

        await this.usersRepository.create({
            email,
            name,
            password_hash
        })
    }
}