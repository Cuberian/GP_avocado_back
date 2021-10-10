import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';

@Controller('ratings')
export class RatingsController {
  constructor(private ratingsService: RatingsService) {}

  @Post()
  create(@Body() dto: CreateRatingDto) {
    return this.ratingsService.createRating(dto);
  }

  @Get('/:game')
  getByGameId(@Param('game') game: number) {
    return this.ratingsService.getRatingsByGameId(game);
  }

  @Get('/:user')
  getByUserId(@Param('user') user: number) {
    return this.ratingsService.getRatingsByUserId(user);
  }
}
