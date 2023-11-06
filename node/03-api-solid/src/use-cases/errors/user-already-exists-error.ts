export class UserAlreadyExistisError extends Error {
    constructor() {
        super('User already exists')
    }
}