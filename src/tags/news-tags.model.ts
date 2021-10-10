import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { News } from '../news/news.model';
import { Tag } from './tag.model';

@Table({ tableName: 'news_tags', createdAt: false, updatedAt: false })
export class NewsTags extends Model<NewsTags> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => News)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: 'CASCADE' })
  newsId: number;

  @ForeignKey(() => Tag)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: 'CASCADE' })
  tagId: number;
}
