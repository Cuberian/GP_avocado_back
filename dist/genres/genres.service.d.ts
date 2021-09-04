import { Genre } from "./genre.model";
import { CreateGenreDto } from "./dto/create-genre.dto";
export declare class GenresService {
    private genreRepository;
    constructor(genreRepository: typeof Genre);
    createGenre(dto: CreateGenreDto): Promise<Genre>;
    getGenreByValue(value: string): Promise<Genre>;
    getAllGenres(): Promise<Genre[]>;
}
