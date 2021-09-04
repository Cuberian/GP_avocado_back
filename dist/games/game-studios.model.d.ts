import { Model } from "sequelize-typescript";
export declare class GameStudios extends Model<GameStudios> {
    id: number;
    gameId: number;
    studioId: number;
}
