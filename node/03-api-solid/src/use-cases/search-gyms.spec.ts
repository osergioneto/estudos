import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
    beforeEach(async () => {
        gymsRepository = new InMemoryGymsRepository()
        sut = new SearchGymsUseCase(gymsRepository)
    })

    it('should be able to search gyms', async () => {
        const gym = await gymsRepository.create({
            name: 'Javascript Gym',
            description: null,
            phone: null,
            latitude: -27.2092052,
            longitude: -49.6401092,
        })

        const { gyms } = await sut.execute({
            title: 'Javascript Gym',
            page: 1
        })

        expect(gyms).toHaveLength(1)
    })

    it('should be able to search paginated gyms', async () => {
        for (let i = 1; i <= 22; i++) {
            await gymsRepository.create({
                name: `Javascript Gym ${i}`,
                description: null,
                phone: null,
                latitude: -27.2092052,
                longitude: -49.6401092,
            })
        }

        const { gyms } = await sut.execute({
            title: 'Javascript Gym',
            page: 2
        })

        expect(gyms).toHaveLength(2)
        expect(gyms).toEqual([
            expect.objectContaining({ name: 'Javascript Gym 21' }),
            expect.objectContaining({ name: 'Javascript Gym 22' }),
        ])
    })
})

