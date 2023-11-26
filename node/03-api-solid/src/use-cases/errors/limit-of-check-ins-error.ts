export class LimitCheckInsError extends Error {
    constructor() {
        super('Limit of check-ins reached.')
    }
}