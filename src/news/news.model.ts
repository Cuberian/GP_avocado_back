import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { NewsTags } from '../tags/news-tags.model';
import { Tag } from '../tags/tag.model';

interface NewsCreationAttributes {
  header: string;
  text: string;
  views: number;
  record_type: string;
  author_id: number;
}

@Table({ tableName: 'news' })
export class News extends Model<News, NewsCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  header: string;

  @Column({ type: DataType.STRING })
  coverImage: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  text: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  views: number;

  @Column({ type: DataType.ENUM('news', 'article'), allowNull: false })
  record_type: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  author_id: number;

  @BelongsTo(() => User, 'author_id')
  author: User;

  @BelongsToMany(() => Tag, () => NewsTags)
  tags: Tag[];
}
