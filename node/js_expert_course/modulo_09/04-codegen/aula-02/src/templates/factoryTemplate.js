import Util from "../util";

const repositoryNameAnchor = "$$repositoryName";
const serviceNameAnchor = "$$serviceName";

const repositoryNameDepAnchor = "$$repositoryNameDep";
const serviceNameDepAnchor = "$$serviceNameDep";

const componentNameAnchor = "$$componentName";


const template = `
import $$serviceName from "../service/$$serviceNameDep.js";
import $$repositoryName from "../repository/$$repositoryNameDep.js";

export default class $$componentNameFactory {
    static getInstance() {
        const repository = new $$repositoryName();
        const service = new $$serviceName({ repository });
        return service;
    }
}
`;

export function factoryTemplate(componentName, repositoryName, serviceName) {
    const textFile = template
        .replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName))
        .replaceAll(serviceNameDepAnchor, Util.lowerCaseFirstLetter(serviceName))
        .replaceAll(repositoryNameDepAnchor, Util.lowerCaseFirstLetter(repositoryName))
        .replaceAll(serviceNameAnchor, Util.upperCaseFirstLetter(serviceName))
        .replaceAll(repositoryNameAnchor, Util.upperCaseFirstLetter(repositoryName))

    return {
        fileName: `${componentName}Factory`,
        template: textFile
    }
}