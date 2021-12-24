import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from './game.model';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { StudiosService } from '../studios/studios.service';
import { PlatformsService } from '../platforms/platforms.service';
import { GenresService } from '../genres/genres.service';
import { Platform } from '../platforms/platform.model';
import { Genre } from '../genres/genre.model';
import { Studio } from '../studios/studio.model';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel(Game) private gamesRepository: typeof Game,
    private studiosService: StudiosService,
    private platformsService: PlatformsService,
    private genresService: GenresService,
  ) {}

  async createGame(dto: CreateGameDto) {
    const { title, releaseDate } = dto;
    const { platforms, genres, studios, publishers } = dto;
    const newGame = await this.gamesRepository.create({
      title,
      releaseDate,
    });

    const validPlatforms: Platform[] = [];

    for (const platformTitle of platforms) {
      const platform = await this.platformsService.getPlatformByTitle(platformTitle);
      if (platform) {
        validPlatforms.push(platform);
      }
      else  {
        const newPlatform = await this.platformsService.createPlatform({title: platformTitle})
        validPlatforms.push(newPlatform);
      }
    }

    const validGenres: Genre[] = [];

    for (const genreValue of genres) {
      const genre = await this.genresService.getGenreByValue(genreValue);
      if (genre) {
        validGenres.push(genre);
      }
      else  {
        const newGenre = await this.genresService.createGenre({value: genreValue})
        validGenres.push(newGenre);
      }
    }

    const validStudios: Studio[] = [];

    for (const studioName of studios) {
      const studio = await this.studiosService.getStudiosByName(studioName);

      if (studio) {
        validStudios.push(studio);
      }
      else  {
        const newStudio = await this.studiosService.createStudio({name: studioName})
        validStudios.push(newStudio);
      }
    }

    const validPublishers: Studio[] = [];

    for (const publisherName of publishers) {
      const publisher = await this.studiosService.getStudiosByName(publisherName);

      if (publisher) {
        validPublishers.push(publisher);
      }
      else  {
        const newPublisher = await this.studiosService.createStudio({name: publisherName})
        validPublishers.push(newPublisher);
      }
    }

    await newGame.$set(
      'platforms',
      validPlatforms.map((platform) => platform.id),
    );

    await newGame.$set(
      'genres',
      validGenres.map((genre) => genre.id),
    );

    await newGame.$set(
      'studios',
      validStudios.map((studio) => studio.id),
    );

    await newGame.$set(
      'publishers',
      validPublishers.map((publishers) => publishers.id),
    );

    return newGame;
  }

  async updateGame(dto: UpdateGameDto) {
    const { id, title, releaseDate } = dto;
    const { platforms, genres, studios, publishers } = dto;
    const game = await this.gamesRepository.findByPk(id);
    const updatedGame = await game.update({ title, releaseDate });

    const validPlatforms: Platform[] = [];

    for (const platformTitle of platforms) {
      const platform = await this.platformsService.getPlatformByTitle(platformTitle);
      if (platform) {
        validPlatforms.push(platform);
      }
      else  {
        const newPlatform = await this.platformsService.createPlatform({title: platformTitle})
        validPlatforms.push(newPlatform);
      }
    }

    const validGenres: Genre[] = [];

    for (const genreValue of genres) {
      const genre = await this.genresService.getGenreByValue(genreValue);
      if (genre) {
        validGenres.push(genre);
      }
      else  {
        const newGenre = await this.genresService.createGenre({value: genreValue})
        validGenres.push(newGenre);
      }
    }

    const validStudios: Studio[] = [];

    for (const studioName of studios) {
      const studio = await this.studiosService.getStudiosByName(studioName);

      if (studio) {
        validStudios.push(studio);
      }
      else  {
        const newStudio = await this.studiosService.createStudio({name: studioName})
        validStudios.push(newStudio);
      }
    }

    const validPublishers: Studio[] = [];

    for (const publisherName of publishers) {
      const publisher = await this.studiosService.getStudiosByName(publisherName);
      if (publisher) validPublishers.push(publisher);

      if (publisher) {
        validPublishers.push(publisher);
      }
      else  {
        const newPublisher = await this.studiosService.createStudio({name: publisherName})
        validPublishers.push(newPublisher);
      }
    }

    await updatedGame.$set(
      'platforms',
      validPlatforms.map((platform) => platform.id),
    );

    await updatedGame.$set(
      'genres',
      validGenres.map((genre) => genre.id),
    );

    await updatedGame.$set(
      'studios',
      validStudios.map((studio) => studio.id),
    );

    await updatedGame.$set(
      'publishers',
      validPublishers.map((publishers) => publishers.id),
    );
    return updatedGame;
  }

  async getGamesByTitle(title: string) {
    return await this.gamesRepository.findAll({ where: { title } });
  }

  async getGameById(id: number) {
    return await this.gamesRepository.findByPk(id, { include: { all: true } });
  }

  async getAllGames() {
    return await this.gamesRepository.findAll({ include: { all: true } });
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
