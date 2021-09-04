import { Model } from "sequelize-typescript";
import { Game } from "../games/game.model";
interface GenreCreationAttributes {
    value: string;
}
export declare class Genre extends Model<Genre, GenreCreationAttributes> {
    id: number;
    value: string;
    genres: Game[];
}
export {};
