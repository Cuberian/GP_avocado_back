import { Model } from "sequelize-typescript";
import { Platform } from '../platforms/platform.model';
import { Studio } from "../studios/studio.model";
import { Genre } from "../genres/genre.model";
interface GameCreationAttributes {
    title: string;
    release_date: Date;
}
export declare class Game extends Model<Game, GameCreationAttributes> {
    id: number;
    title: string;
    release_date: Date;
    platforms: Platform[];
    publishers: Studio[];
    studios: Studio[];
    genres: Genre[];
}
export {};
