import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './genre.model';
import { CreateGenreDto } from './dto/create-genre.dto';

@Injectable()
export class GenresService {
  constructor(@InjectModel(Genre) private genreRepository: typeof Genre) {}

  async createGenre(dto: CreateGenreDto) {
    return await this.genreRepository.create(dto);
  }

  async getGenreByValue(value: string) {
    return await this.genreRepository.findOne({ where: { value } });
  }

  async getGenreById(id: number) {
    return await this.genreRepository.findOne({ where: { id } });
  }

  async getAllGenres() {
    return await this.genreRepository.findAll();
  }
}
