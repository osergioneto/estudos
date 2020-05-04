// tslint:disable-next-line:no-var-requires
require("dotenv").config();
import { Sequelize } from "sequelize-typescript";

import { CurrencyConversions, GraduationTypes } from "./models/";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required.");
}

const sequelize = new Sequelize(process.env.DATABASE_URL);
sequelize.addModels([CurrencyConversions, GraduationTypes]);
export default sequelize;
