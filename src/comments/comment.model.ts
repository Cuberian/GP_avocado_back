import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Role} from "../roles/role.model";
import {User} from "../users/user.model";
import {News} from "../news/news.model";

interface CommentCreationAttributes {
    text: string,
    score: number,
    author_id: number,
    news_id: number;
}

@Table({tableName: 'comments'})
export class Comment extends Model<Comment, CommentCreationAttributes> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.TEXT, allowNull: false })
    text: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    score: number;

    @ForeignKey(() => News)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    news_id: number;

    @BelongsTo(() => News, 'news_id')
    news: News;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    author_id: number;

    @BelongsTo(() => User, 'author_id')
    author: User;
}
