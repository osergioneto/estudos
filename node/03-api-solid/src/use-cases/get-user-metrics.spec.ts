import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { GetUserMetricsUseCase } from './get-user-metrics'

let checkInsRepository: InMemoryCheckInsRepository
let sut: GetUserMetricsUseCase

describe('Get User Metrics Use Case', () => {
    beforeEach(async () => {
        checkInsRepository = new InMemoryCheckInsRepository()
        sut = new GetUserMetricsUseCase(checkInsRepository)
    })

    it('should be able to fetch check-ins count from metrics', async () => {
        for (let i = 1; i <= 5; i++) {
            await checkInsRepository.create({
                user_id: 'user-id',
                gym_id: `gym-${i}`,
                created_at: new Date(),
                updated_at: null
            })
        }

        const { checkInsCount } = await sut.execute({
            userId: 'user-id',
        })

        expect(checkInsCount).toBe(5)
    })
})

