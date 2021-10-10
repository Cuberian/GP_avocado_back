import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../roles/role.model';
import { CreateRoleDto } from '../roles/dto/create-role.dto';
import { Rating } from './rating.model';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingsService {
  constructor(@InjectModel(Rating) private ratingRepository: typeof Rating) {}

  async createRating(dto: CreateRatingDto) {
    return await this.ratingRepository.create(dto);
  }

  async getRatingsByUserId(user_id: number) {
    return await this.ratingRepository.findAll({ where: { user_id } });
  }

  async getRatingsByGameId(game_id: number) {
    return await this.ratingRepository.findAll({ where: { game_id } });
  }
}
