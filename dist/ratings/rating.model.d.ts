import { Model } from "sequelize-typescript";
import { User } from "../users/user.model";
import { Game } from "../games/game.model";
interface RatingCreationAttributes {
    rating: number;
    game_id: number;
    user_id: number;
}
export declare class Rating extends Model<Rating, RatingCreationAttributes> {
    id: number;
    rating: number;
    game_id: number;
    game: Game;
    user_id: number;
    user: User;
}
export {};
