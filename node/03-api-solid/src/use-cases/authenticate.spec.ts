import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'
import { AuthenticateUseCase } from './authenticate'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

let usersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new AuthenticateUseCase(usersRepository)
    })

    it('should be able to authenticate', async () => {
        const createdUser = await usersRepository.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password_hash: await hash('123456', 6)
        })

        const { user: authenticatedUser } = await sut.execute({
            email: createdUser.email,
            password: '123456'
        })

        expect(createdUser).toEqual(authenticatedUser)
    })

    it('should not be able to authenticate non existing user', async () => {
        await expect(() => sut.execute({
            email: 'maki_zenin@jjk.com',
            password: '123456'
        })).rejects.toBeInstanceOf(InvalidCredentialsError)
    })

    it('should not be able to authenticate when password don"t match', async () => {
        await usersRepository.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password_hash: await hash('123456', 6)
        })

        await expect(() => sut.execute({
            email: 'john.doe@example.com',
            password: 'satoro_gojo_lives'
        })).rejects.toBeInstanceOf(InvalidCredentialsError)
    })
})