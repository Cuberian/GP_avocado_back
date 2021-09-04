import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {GenresService} from "./genres.service";
import {CreateGenreDto} from "./dto/create-genre.dto";

@Controller('genres')
export class GenresController {
    constructor(private platformsService: GenresService) {}

    @Post()
    create(@Body() dto: CreateGenreDto) {
        return this.platformsService.createGenre(dto)
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.platformsService.getGenreByValue(value)
    }

    @Get()
    getAll() {
        return this.platformsService.getAllGenres()
    }
}
