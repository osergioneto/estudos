import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
    beforeEach(() => {
        gymsRepository = new InMemoryGymsRepository()
        sut = new CreateGymUseCase(gymsRepository)
    })

    it('should be able to create a gym', async () => {
        const { gym } = await sut.execute({
            name: 'Javascript Gym',
            description: '',
            phone: '',
            latitude: -23.5916201,
            longitude: -46.6222736
        })

        expect(gym.id).toEqual(expect.any(String))
    })
})