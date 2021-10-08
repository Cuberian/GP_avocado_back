import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from './game.model';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(@InjectModel(Game) private gamesRepository: typeof Game) {}

  async createGame(dto: CreateGameDto) {
    return await this.gamesRepository.create();
  }

  async updateGame(dto: UpdateGameDto) {
    const { gameId, title, release_date } = dto;
    const game = await this.gamesRepository.findByPk(gameId);
    return await game.update({ title, release_date });
  }

  async getGamesByTitle(title: string) {
    return await this.gamesRepository.findAll({ where: { title } });
  }

  async getGameById(id: number) {
    return await this.gamesRepository.findByPk(id);
  }

  async getAllGames() {
    return await this.gamesRepository.findAll();
  }

  async setCover(gameId: number, coverImage: string) {
    const game = await this.gamesRepository.findByPk(gameId);
    return await game.update({ coverImage: coverImage });
  }

  async deleteCover(gameId: number) {
    const news = await this.gamesRepository.findByPk(gameId);
    return await news.update({ coverImage: null });
  }
}
