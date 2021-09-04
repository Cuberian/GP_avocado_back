import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {GameStudios} from "../games/game-studios.model";
import {Game} from "../games/game.model";
import {GamePublishers} from "../games/game-publishers.model";

interface StudioCreationAttributes {
    name: string,
}

@Table({tableName: 'studios'})
export class Studio extends Model<Studio, StudioCreationAttributes> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @BelongsToMany(() => Game, () => GameStudios)
    developedGames: Game[]

    @BelongsToMany(() => Game, () => GamePublishers)
    publishedGames: Game[]
}
