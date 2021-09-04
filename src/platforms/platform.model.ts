import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import { GamePlatforms } from "src/games/game-platforms.model";
import { Game } from "src/games/game.model";

interface PlatformCreationAttributes {
    title: string;
}

@Table({tableName: 'platforms'})
export class Platform extends Model<Platform, PlatformCreationAttributes> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string;

    @BelongsToMany(() => Game, () => GamePlatforms)
    platforms: Game[]
}
