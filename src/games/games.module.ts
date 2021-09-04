import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import {Game} from "./game.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {Platform} from "../platforms/platform.model";
import {Genre} from "../genres/genre.model";
import {Studio} from "../studios/studio.model";
import {GamePlatforms} from "./game-platforms.model";
import {GameStudios} from "./game-studios.model";
import {GamePublishers} from "./game-publishers.model";
import {GameGenres} from "./game-genres.model";

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [
    SequelizeModule.forFeature([Game, Platform, Genre, Studio, GamePlatforms, GameStudios, GamePublishers, GameGenres])
  ]
})
export class GamesModule {}
