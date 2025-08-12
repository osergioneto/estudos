import { CheckInUseCase } from "../checkin"
import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository"
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms.repository"

export function makeCheckInUseCase() {
    const prismaCheckInsRepository = new PrismaCheckInsRepository()
    const prismaGymsRepository = new PrismaGymsRepository()

    const useCase = new CheckInUseCase(prismaCheckInsRepository, prismaGymsRepository)

    return useCase
}