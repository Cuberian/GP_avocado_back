import { Game } from "./game.model";
import { CreateGameDto } from "./dto/create-game.dto";
export declare class GamesService {
    private gamesRepository;
    constructor(gamesRepository: typeof Game);
    createGame(dto: CreateGameDto): Promise<Game>;
    getGamesByTitle(title: string): Promise<Game[]>;
    getGameById(id: number): Promise<Game>;
    getAllGames(): Promise<Game[]>;
}
