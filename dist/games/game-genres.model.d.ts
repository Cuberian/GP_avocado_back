import { Model } from "sequelize-typescript";
export declare class GameGenres extends Model<GameGenres> {
    id: number;
    gameId: number;
    genreId: number;
}
