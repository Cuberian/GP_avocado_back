import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Game} from "./game.model";
import {CreateGameDto} from "./dto/create-game.dto";

@Injectable()
export class GamesService {

    constructor(@InjectModel(Game) private gamesRepository: typeof Game) {}

    async createGame(dto: CreateGameDto) {
        return await this.gamesRepository.create(dto);
    }

    async getGamesByTitle(title: string) {
        return await this.gamesRepository.findAll({ where: { title } })
    }

    async getGameById(id: number) {
        return await this.gamesRepository.findByPk(id)
    }

    async getAllGames() {
        return await this.gamesRepository.findAll()
    }
}
