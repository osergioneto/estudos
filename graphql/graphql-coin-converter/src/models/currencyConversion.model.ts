import { AllowNull, BelongsTo, Column, ForeignKey, Length, Model, PrimaryKey, Table } from "sequelize-typescript";
import { FloatDataType, IntegerDataType } from "sequelize/types";

@Table({
    timestamps: true,
    tableName: "currenccurrency_conversion_logsy_",
    paranoid: true,
})
export default class Campuses extends Model<Campuses> {
    @PrimaryKey
    @Column
    public id!: string;

    @AllowNull(false)
    @Column
    public requestedDate!: Date;

    @AllowNull(false)
    @Column
    public tariffDescription!: number;

    @AllowNull(false)
    @Column
    public realValue!: number;

    @AllowNull(false)
    @Column
    public dolarValue!: number;

    @AllowNull(false)
    @Column
    public euroValue!: number;
}
