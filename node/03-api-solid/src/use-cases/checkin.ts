import { CheckIn } from "@prisma/client"
import { CheckInsRepository } from "@/repositories/check-ins-repository"

interface CheckInCaseRequest {
    userId: string
    gymId: string
}

interface CheckInUseCaseResponse {
    checkIn: CheckIn
}

export class CheckInUseCase {
    constructor(private checkInsRepository: CheckInsRepository) { }

    async execute({ gymId, userId }: CheckInCaseRequest): Promise<CheckInUseCaseResponse> {
        const checkIn = await this.checkInsRepository.create({
            gym_id: gymId,
            user_id: userId
        })

        return {
            checkIn,
        }
    }
}