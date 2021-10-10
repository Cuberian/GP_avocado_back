import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { GameGenres } from '../games/game-genres.model';
import { Game } from '../games/game.model';

interface GenreCreationAttributes {
  value: string;
}

@Table({ tableName: 'genres' })
export class Genre extends Model<Genre, GenreCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @BelongsToMany(() => Game, () => GameGenres)
  genres: Game[];
}
