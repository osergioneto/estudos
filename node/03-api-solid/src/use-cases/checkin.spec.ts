import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { CheckInUseCase } from './checkin'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { Decimal } from '@prisma/client/runtime/library'

let checkInsRepository: InMemoryCheckInsRepository
let gymsRepository: InMemoryGymsRepository
let sut: CheckInUseCase

describe('Check In Use Case', () => {
    beforeEach(() => {
        checkInsRepository = new InMemoryCheckInsRepository()
        gymsRepository = new InMemoryGymsRepository()
        sut = new CheckInUseCase(checkInsRepository, gymsRepository)

        gymsRepository.items.push({
            id: 'gym-01',
            name: 'Javascript Gym',
            created_at: new Date(),
            description: '',
            phone: '',
            latitude: new Decimal(0),
            altitude: new Decimal(0)
        })


        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('should be able to create an checkin', async () => {
        const { checkIn } = await sut.execute({
            gymId: 'gym-01',
            userId: 'user-id',
            userLatitude: -23.5916201,
            userLongitude: -46.6222736
        })

        expect(checkIn.id).toEqual(expect.any(String))
    })

    it('should not be able to check in twice in the same day', async () => {
        vi.setSystemTime(new Date(2023, 0, 20, 8, 0, 0))

        const { checkIn } = await sut.execute({
            gymId: 'gym-01',
            userId: 'user-id',
            userLatitude: -23.5916201,
            userLongitude: -46.6222736
        })

        await expect(() =>
            sut.execute({
                gymId: 'gym-01',
                userId: 'user-id',
                userLatitude: -23.5916201,
                userLongitude: -46.6222736
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should be able to check in twitch in different days', async () => {
        vi.setSystemTime(new Date(2023, 0, 20, 8, 0, 0))

        await sut.execute({
            gymId: 'gym-01',
            userId: 'user-id',
            userLatitude: -23.5916201,
            userLongitude: -46.6222736
        })

        vi.setSystemTime(new Date(2023, 0, 21, 8, 0, 0))

        const { checkIn } = await sut.execute({
            gymId: 'gym-01',
            userId: 'user-id',
            userLatitude: -23.5916201,
            userLongitude: -46.6222736
        })

        expect(checkIn.id).toEqual(expect.any(String))
    })
})

