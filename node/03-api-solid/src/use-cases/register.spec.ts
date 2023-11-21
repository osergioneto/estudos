import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistisError } from './errors/user-already-exists-error'

describe('Register Use Case', () => {
    it('should be able to create an user', async () => {
        const inMemoryRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(inMemoryRepository)

        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: '123456'
        })

        expect(user.id).toEqual(expect.any(String))
    })


    it('should hash user password upon registration', async () => {
        const inMemoryRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(inMemoryRepository)

        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: '123456'
        })

        const isPasswordCorrectlyHashed = await compare('123456', user.password_hash)

        expect(isPasswordCorrectlyHashed).toBeTruthy()
    })

    it('should throw error when creating with already existing email', async () => {
        const inMemoryRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(inMemoryRepository)

        const email = 'john.doe@example.com'

        await registerUseCase.execute({
            name: 'John Doe',
            email,
            password: '123456'
        })

        await expect(() =>
            registerUseCase.execute({
                name: 'John Doe',
                email,
                password: '123456'
            })
        ).rejects.toBeInstanceOf(UserAlreadyExistisError)
    })
})