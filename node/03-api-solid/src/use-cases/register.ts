import { prisma } from "@/lib/prisma"
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository"
import { hash } from "bcryptjs"

interface RegisterUserCaseRequest {
    name: string
    email: string
    password: string
}

export class RegisterUseCase {
    constructor(private usersRepository: any) { }

    async execute({ name, email, password }: RegisterUserCaseRequest) {
        const emailAlreadyExists = await this.usersRepository.findUnique({ email })

        if (emailAlreadyExists) {
            throw new Error('E-mail already exists')
        }

        const password_hash = await hash(password, 8)

        await this.usersRepository.create({
            email,
            name,
            password_hash
        })
    }
}