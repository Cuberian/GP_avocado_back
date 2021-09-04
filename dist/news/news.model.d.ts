import { Model } from "sequelize-typescript";
import { User } from "../users/user.model";
import { Tag } from "../tags/tag.model";
interface NewsCreationAttributes {
    header: string;
    text: string;
    views: number;
    record_type: string;
    author_id: number;
}
export declare class News extends Model<News, NewsCreationAttributes> {
    id: number;
    header: string;
    coverImage: string;
    text: string;
    views: number;
    record_type: number;
    author_id: number;
    author: User;
    tags: Tag[];
}
export {};
