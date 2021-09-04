import { Model } from "sequelize-typescript";
import { News } from "../news/news.model";
interface TagCreationAttributes {
    value: string;
}
export declare class Tag extends Model<Tag, TagCreationAttributes> {
    id: number;
    value: string;
    news: News[];
}
export {};
