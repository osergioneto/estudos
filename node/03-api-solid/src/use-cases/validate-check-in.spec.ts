import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { ValidateCheckInUseCase } from './validate-check-in'
import { randomUUID } from 'node:crypto'
import { ResourceNotFoundError } from './errors/resource-not-found'
import { LateCheckInValidationError } from './errors/late-check-in-validation-error'

let checkInsRepository: InMemoryCheckInsRepository
let sut: ValidateCheckInUseCase

describe('Validate Check In Use Case', () => {
    beforeEach(async () => {
        checkInsRepository = new InMemoryCheckInsRepository()
        sut = new ValidateCheckInUseCase(checkInsRepository)

        vi.useFakeTimers()
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

    it('should be able to validate an unexisting checkin', async () => {
        await expect(sut.execute({
            checkInId: randomUUID()
        })).rejects.toBeInstanceOf(ResourceNotFoundError)
    })

    it('should not be able to validate check-in 20 minutes after it was created', async () => {
        vi.setSystemTime(new Date(2023, 0, 1, 13, 40))

        const createdCheckIn = await checkInsRepository.create({
            gym_id: 'gym-01',
            user_id: 'user-id'
        })

        const twentyOneMinutesinMs = 1000 * 60 * 21;

        vi.advanceTimersByTime(twentyOneMinutesinMs)

        await expect(() => sut.execute({
            checkInId: createdCheckIn.id
        })).rejects.toBeInstanceOf(LateCheckInValidationError)
    })
})

