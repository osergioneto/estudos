import { Gym, Prisma } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { randomUUID } from "node:crypto";
import { GymsRepository } from "../gyms-repository";
import { Decimal } from "@prisma/client/runtime/library";

export class InMemoryGymsRepository implements GymsRepository {
    public items: Gym[] = []

    async findById(gymId: string) {
        const gym = this.items.find((item) => item.id === gymId)

        if (!gym) {
            return null
        }

        return gym
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