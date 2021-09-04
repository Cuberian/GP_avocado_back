import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Studio} from '../studios/studio.model'
import {Game} from "./game.model";



@Table({tableName: 'game_publishers', createdAt: false, updatedAt: false})
export class GamePublishers extends Model<GamePublishers> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => Game)
    @Column({ type: DataType.INTEGER, allowNull: false })
    gameId: number;

    @ForeignKey(() => Studio)
    @Column({ type: DataType.INTEGER, allowNull: false })
    publisherId: number;

}
