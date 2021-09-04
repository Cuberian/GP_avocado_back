import { Model } from "sequelize-typescript";
import { Game } from "src/games/game.model";
interface PlatformCreationAttributes {
    title: string;
}
export declare class Platform extends Model<Platform, PlatformCreationAttributes> {
    id: number;
    title: string;
    platforms: Game[];
}
export {};
