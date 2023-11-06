import { prisma } from "@/lib/prisma"
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository"
import { hash } from "bcryptjs"

interface RegisterUserCaseRequest {
    name: string
    email: string
    password: string
}

export async function registerUseCase({ name, email, password }: RegisterUserCaseRequest) {
    const emailAlreadyExists = await prisma.user.findUnique({ where: { email } })

    if (emailAlreadyExists) {
        throw new Error('E-mail already exists')
    }

    const password_hash = await hash(password, 8)

    const prismaUsersRepository = new PrismaUsersRepository()

    await prismaUsersRepository.create({
        email,
        name,
        password_hash
    })
}