import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Search Gyms Use Case', () => {
    beforeEach(async () => {
        gymsRepository = new InMemoryGymsRepository()
        sut = new FetchNearbyGymsUseCase(gymsRepository)
    })

    it('should be able to fetch nearby gyms', async () => {
        await gymsRepository.create({
            name: 'Near Gym',
            description: null,
            phone: null,
            latitude: -27.2092052,
            longitude: -49.6401092,
        })

        await gymsRepository.create({
            name: 'Far Gym',
            description: null,
            phone: null,
            latitude: -23.5916201,
            longitude: -46.6222736,
        })

        const { gyms } = await sut.execute({
            userLatitude: -27.2092052,
            userLongitude: -49.6401092,
        })

        expect(gyms).toHaveLength(1)
        expect(gyms).toEqual([
            expect.objectContaining({ name: 'Near Gym' }),
        ])
    })
})

