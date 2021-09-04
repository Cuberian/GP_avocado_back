import { Model } from "sequelize-typescript";
export declare class NewsTags extends Model<NewsTags> {
    id: number;
    newsId: number;
    tagId: number;
}
