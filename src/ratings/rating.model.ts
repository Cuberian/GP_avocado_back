import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Game } from '../games/game.model';

interface RatingCreationAttributes {
  rating: number;
  game_id: number;
  user_id: number;
}

@Table({ tableName: 'ratings' })
export class Rating extends Model<Rating, RatingCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  rating: number;

  @ForeignKey(() => Game)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  game_id: number;

  @BelongsTo(() => Game, 'game_id')
  game: Game;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => User, 'user_id')
  user: User;
}
