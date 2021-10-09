import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from './game.model';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { StudiosService } from '../studios/studios.service';
import { PlatformsService } from '../platforms/platforms.service';
import { GenresService } from '../genres/genres.service';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel(Game) private gamesRepository: typeof Game,
    private studiosService: StudiosService,
    private platformsService: PlatformsService,
    private genresService: GenresService,
  ) {}

  async createGame(dto: CreateGameDto) {
    const { title, releaseDate, platforms, genres, studios, publishers } = dto;
    const newGame = await this.gamesRepository.create({ title, releaseDate });
    for (const platformTitle of platforms) {
      const platform = await this.platformsService.getPlatformByTitle(
        platformTitle,
      );
    }
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
