import { Gym } from "@prisma/client"
import { randomUUID } from "crypto"
import { GymsRepository } from "@/repositories/gyms-repository"

interface CreateGymUseCaseRequest {
    id?: string | null
    name: string
    description: string | null
    phone: string | null
    latitude: number
    longitude: number
}

interface CreateGymUseCaseResponse {
    gym: Gym
}

export class CreateGymUseCase {
    constructor(private gymsRepository: GymsRepository) { }

    async execute(data: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
        const gym = await this.gymsRepository.create({
            id: data.id ?? randomUUID(),
            name: data.name,
            description: data.description,
            phone: data.phone,
            latitude: data.latitude,
            longitude: data.longitude
        })

        return {
            gym,
        }
    }
}