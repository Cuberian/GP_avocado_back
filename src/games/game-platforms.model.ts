import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Platform} from '../platforms/platform.model'
import {Game} from "./game.model";



@Table({tableName: 'game_platforms', createdAt: false, updatedAt: false})
export class GamePlatforms extends Model<GamePlatforms> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => Game)
    @Column({ type: DataType.INTEGER, allowNull: false })
    gameId: number;

    @ForeignKey(() => Platform)
    @Column({ type: DataType.INTEGER, allowNull: false })
    platformId: number;

}
