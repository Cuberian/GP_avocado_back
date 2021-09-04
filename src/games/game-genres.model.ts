import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Genre} from '../genres/genre.model'
import {Game} from "./game.model";



@Table({tableName: 'game_genres', createdAt: false, updatedAt: false})
export class GameGenres extends Model<GameGenres> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => Game)
    @Column({ type: DataType.INTEGER, allowNull: false })
    gameId: number;

    @ForeignKey(() => Genre)
    @Column({ type: DataType.INTEGER, allowNull: false })
    genreId: number;

}
