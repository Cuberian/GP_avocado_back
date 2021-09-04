import { Model } from "sequelize-typescript";
export declare class GamePlatforms extends Model<GamePlatforms> {
    id: number;
    gameId: number;
    platformId: number;
}
