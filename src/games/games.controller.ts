import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {GamesService} from "./games.service";
import {CreateGameDto} from "./dto/create-game.dto";

@Controller('games')
export class GamesController {

    constructor(private gamesService: GamesService) {}

    @Post()
    create(@Body() dto: CreateGameDto) {
        return this.gamesService.createGame(dto)
    }

    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.gamesService.getGameById(id)
    }

    @Get('/:title')
    getByTitle(@Param('title') title: string) {
        return this.gamesService.getGamesByTitle(title)
    }

    @Get()
    getAll() {
        return this.gamesService.getAllGames()
    }
}
