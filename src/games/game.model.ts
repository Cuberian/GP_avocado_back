import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Platform } from '../platforms/platform.model';
import { GamePlatforms } from './game-platforms.model';
import { GamePublishers } from './game-publishers.model';
import { Studio } from '../studios/studio.model';
import { GameStudios } from './game-studios.model';
import { GameGenres } from './game-genres.model';
import { Genre } from '../genres/genre.model';

interface GameCreationAttributes {
  title: string;
  releaseDate: Date;
}

@Table({ tableName: 'games' })
export class Game extends Model<Game, GameCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.DATE, field: 'release_date' })
  releaseDate: Date;

  @Column({ type: DataType.STRING })
  coverImage: string;

  @BelongsToMany(() => Platform, () => GamePlatforms)
  platforms: Platform[];

  @BelongsToMany(() => Studio, () => GamePublishers)
  publishers: Studio[];

  @BelongsToMany(() => Studio, () => GameStudios)
  studios: Studio[];

  @BelongsToMany(() => Genre, () => GameGenres)
  genres: Genre[];
}
