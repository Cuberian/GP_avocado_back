import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Genre} from "./genre.model";
import {GameGenres} from "../games/game-genres.model";
import {Game} from "../games/game.model";

@Module({
  controllers: [GenresController],
  providers: [GenresService],
  imports: [
    SequelizeModule.forFeature([Genre, Game, GameGenres])
  ]
})
export class GenresModule {}
