import {Body, Controller, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import {UpdateRatingDto} from "./dto/update-rating.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('ratings')
export class RatingsController {
  constructor(private ratingsService: RatingsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateRatingDto) {
    return this.ratingsService.createRating(dto);
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  update(@Body() dto: UpdateRatingDto) {
    return this.ratingsService.updateRating(dto);
  }

  @Get('game/:game')
  getByGameId(@Param('game') game: number) {
    return this.ratingsService.getRatingsByGameId(game);
  }

  @Get('user/:user')
  getByUserId(@Param('user') user: number) {
    return this.ratingsService.getRatingsByUserId(user);
  }
}
