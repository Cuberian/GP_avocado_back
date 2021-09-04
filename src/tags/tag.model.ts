import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {News} from "../news/news.model";
import {NewsTags} from "./news-tags.model";

interface TagCreationAttributes {
    value: string;
}

@Table({tableName: 'tags'})
export class Tag extends Model<Tag, TagCreationAttributes> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @BelongsToMany(() => News, () => NewsTags)
    news: News[]

}
