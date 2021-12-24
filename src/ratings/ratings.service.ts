import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../roles/role.model';
import { CreateRoleDto } from '../roles/dto/create-role.dto';
import { Rating } from './rating.model';
import { CreateRatingDto } from './dto/create-rating.dto';
import {UpdateRatingDto} from "./dto/update-rating.dto";

@Injectable()
export class RatingsService {
  constructor(@InjectModel(Rating) private ratingRepository: typeof Rating) {}

  async createRating(dto: CreateRatingDto) {
    return await this.ratingRepository.create(dto);
  }

  async updateRating(dto: UpdateRatingDto) {
    const { rating, user_id, game_id} = dto
    const ratingObj = await this.ratingRepository.findOne({ where: {user_id, game_id}})
    return await ratingObj.update({ rating });
  }

  async getRatingsByUserId(user_id: number) {
    return await this.ratingRepository.findAll({ where: { user_id } });
  }

  async getRatingsByGameId(game_id: number) {
    return await this.ratingRepository.findAll({ where: { game_id } });
  }
}
