import { Module } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { PlatformsController } from './platforms.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Platform } from './platform.model';
import { Game } from '../games/game.model';
import { GamePlatforms } from '../games/game-platforms.model';

@Module({
  controllers: [PlatformsController],
  providers: [PlatformsService],
  imports: [SequelizeModule.forFeature([Platform, Game, GamePlatforms])],
  exports: [PlatformsService],
})
export class PlatformsModule {}
