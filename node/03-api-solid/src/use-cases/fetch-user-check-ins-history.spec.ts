import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { FetchUserCheckInsUseCase } from './fetch-user-check-ins-history'

let checkInsRepository: InMemoryCheckInsRepository
let sut: FetchUserCheckInsUseCase

describe('Check In Use Case', () => {
    beforeEach(async () => {
        checkInsRepository = new InMemoryCheckInsRepository()
        sut = new FetchUserCheckInsUseCase(checkInsRepository)


    })

    it('should be able to fetch check-ins history', async () => {
        for (let i = 1; i <= 22; i++) {
            await checkInsRepository.create({
                user_id: 'user-id',
                gym_id: `gym-${i}`,
                created_at: new Date(),
                updated_at: null
            })
        }

        const { checkIns } = await sut.execute({
            userId: 'user-id',
            page: 2
        })

        expect(checkIns).toHaveLength(2)
        expect(checkIns).toEqual([
            expect.objectContaining({
                gym_id: 'gym-21'
            }),
            expect.objectContaining({
                gym_id: 'gym-22'
            }),
        ])
    })
})

