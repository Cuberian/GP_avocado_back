import { GenresService } from "./genres.service";
import { CreateGenreDto } from "./dto/create-genre.dto";
export declare class GenresController {
    private platformsService;
    constructor(platformsService: GenresService);
    create(dto: CreateGenreDto): Promise<import("./genre.model").Genre>;
    getByValue(value: string): Promise<import("./genre.model").Genre>;
    getAll(): Promise<import("./genre.model").Genre[]>;
}
