import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistisError } from './errors/user-already-exists-error'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new RegisterUseCase(usersRepository)
    })

    it('should be able to create an user', async () => {
        const { user } = await sut.execute({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: '123456'
        })

        expect(user.id).toEqual(expect.any(String))
    })


    it('should hash user password upon registration', async () => {
        const { user } = await sut.execute({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: '123456'
        })

        const isPasswordCorrectlyHashed = await compare('123456', user.password_hash)

        expect(isPasswordCorrectlyHashed).toBeTruthy()
    })

    it('should throw error when creating with already existing email', async () => {
        const email = 'john.doe@example.com'

        await sut.execute({
            name: 'John Doe',
            email,
            password: '123456'
        })

        await expect(() =>
            sut.execute({
                name: 'John Doe',
                email,
                password: '123456'
            })
        ).rejects.toBeInstanceOf(UserAlreadyExistisError)
    })
})