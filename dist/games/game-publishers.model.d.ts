import { Model } from "sequelize-typescript";
export declare class GamePublishers extends Model<GamePublishers> {
    id: number;
    gameId: number;
    publisherId: number;
}
