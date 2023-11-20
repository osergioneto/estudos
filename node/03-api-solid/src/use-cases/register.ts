import { prisma } from "@/lib/prisma"
import { UsersRepository } from "@/repositories/users-repository"
import { hash } from "bcryptjs"
import { UserAlreadyExistisError } from "./errors/user-already-exists-error"
import { User } from "@prisma/client"

interface RegisterUserCaseRequest {
    name: string
    email: string
    password: string
}

interface RegisterUseCaseResponse {
    user: User
}

export class RegisterUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute({ name, email, password }: RegisterUserCaseRequest): Promise<RegisterUseCaseResponse> {
        const emailAlreadyExists = await this.usersRepository.findByEmail(email)

        if (emailAlreadyExists) {
            throw new UserAlreadyExistisError()
        }

        const password_hash = await hash(password, 8)

        const user = await this.usersRepository.create({
            email,
            name,
            password_hash
        })

        return {
            user,
        }
    }
}