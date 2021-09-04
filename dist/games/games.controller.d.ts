import { GamesService } from "./games.service";
import { CreateGameDto } from "./dto/create-game.dto";
export declare class GamesController {
    private gamesService;
    constructor(gamesService: GamesService);
    create(dto: CreateGameDto): Promise<import("./game.model").Game>;
    getById(id: number): Promise<import("./game.model").Game>;
    getByTitle(title: string): Promise<import("./game.model").Game[]>;
    getAll(): Promise<import("./game.model").Game[]>;
}
