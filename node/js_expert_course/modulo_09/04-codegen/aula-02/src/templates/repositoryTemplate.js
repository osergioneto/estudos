import Util from "../util";
const componentNameAnchor = "$$componentName";

const template = `
export default class $$componentNameRepository {
    constructor() {}
    
    create(data) {
        return Promise.reject("not implemented");
    }

    read(query) {
        return Promise.reject("not implemented");
    }

    update(id, data) {
        return Promise.reject("not implemented");
    }

    delete(id) {
        return Promise.reject("not implemented");
    }
}
`;

export function repositoryTemplate(componentName) {
    return {
        fileName: `${componentName}Repository`,
        template: template.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName))
    }
}