import { Gym } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { randomUUID } from "node:crypto";
import { GymsRepository } from "../gyms-repository";

export class InMemoryGymsRepository implements GymsRepository {
    public items: Gym[] = []

    async findById(gymId: string) {
        const gym = this.items.find((item) => item.id === gymId)

        if (!gym) {
            return null
        }

        return gym
    }
}