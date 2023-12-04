import { Gym, Prisma } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { randomUUID } from "node:crypto";
import { FindManyNearbyParams, GymsRepository } from "../gyms-repository";
import { Decimal } from "@prisma/client/runtime/library";
import { getDistanceBetweenCoordinates } from "@/utils/get-distance-between-coordinates";

export class InMemoryGymsRepository implements GymsRepository {
    public items: Gym[] = []

    async findById(gymId: string) {
        const gym = this.items.find((item) => item.id === gymId)

        if (!gym) {
            return null
        }

        return gym
    }

    async findManyNearby(params: FindManyNearbyParams) {
        return this.items.filter(item => {
            const distance = getDistanceBetweenCoordinates(
                { latitude: params.latitude, longitude: params.longitude },
                {
                    latitude: item.latitude.toNumber(), longitude: item.longitude.toNumber()
                })

            return distance < 10
        })
    }

    async searchMany(query: string, page: number) {
        return this.items
            .filter((gym) => gym.name.toLowerCase().includes(query.toLowerCase()))
            .slice((page - 1) * 20, page * 20)
    }

    async create(data: Prisma.GymCreateInput) {
        const gym = {
            id: data?.id ?? randomUUID(),
            name: data.name,
            description: data.description ?? null,
            phone: data.phone ?? null,
            latitude: new Decimal(data.latitude.toString()),
            longitude: new Decimal(data.longitude.toString()),
            created_at: new Date()
        }


        this.items.push(gym)

        return gym
    }
}