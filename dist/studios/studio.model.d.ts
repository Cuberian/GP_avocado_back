import { Model } from "sequelize-typescript";
import { Game } from "../games/game.model";
interface StudioCreationAttributes {
    name: string;
}
export declare class Studio extends Model<Studio, StudioCreationAttributes> {
    id: number;
    name: string;
    developedGames: Game[];
    publishedGames: Game[];
}
export {};
