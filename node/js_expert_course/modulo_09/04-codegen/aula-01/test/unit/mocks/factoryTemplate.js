
// export default `
export default class ProductFactory {
    constructor(repository, service) {
        this.repository = repository;
        this.service = service;
    }

    getInstance(data) {
        return this.repository.create(data);
    }
}
// `;