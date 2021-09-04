import { Model } from "sequelize-typescript";
import { User } from "../users/user.model";
import { News } from "../news/news.model";
interface CommentCreationAttributes {
    text: string;
    score: number;
    author_id: number;
    news_id: number;
}
export declare class Comment extends Model<Comment, CommentCreationAttributes> {
    id: number;
    text: string;
    score: number;
    news_id: number;
    news: News;
    author_id: number;
    author: User;
}
export {};
