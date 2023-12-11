import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { ValidateCheckInUseCase } from './validate-check-in'

let checkInsRepository: InMemoryCheckInsRepository
let sut: ValidateCheckInUseCase

describe('Validate Check In Use Case', () => {
    beforeEach(async () => {
        checkInsRepository = new InMemoryCheckInsRepository()
        sut = new ValidateCheckInUseCase(checkInsRepository)

        // vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('should be able to validate an checkin', async () => {
        const createdCheckIn = await checkInsRepository.create({ gym_id: 'gym-01', user_id: 'user-id' })

        const { checkIn } = await sut.execute({
            checkInId: createdCheckIn.id
        })

        expect(checkIn.id).toEqual(expect.any(String))
        expect(checkIn.validated_at).not.toBe(null)
    })

    // it('should not be able to check in twice in the same day', async () => {
    //     vi.setSystemTime(new Date(2023, 0, 20, 8, 0, 0))

    //     const { checkIn } = await sut.execute({
    //         gymId: 'gym-01',
    //         userId: 'user-id',
    //         userLatitude: -23.5916201,
    //         userLongitude: -46.6222736
    //     })

    //     await expect(() =>
    //         sut.execute({
    //             gymId: 'gym-01',
    //             userId: 'user-id',
    //             userLatitude: -23.5916201,
    //             userLongitude: -46.6222736
    //         })
    //     ).rejects.toBeInstanceOf(LimitCheckInsError)
    // })
})

