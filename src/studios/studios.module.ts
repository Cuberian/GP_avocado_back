import { Module } from '@nestjs/common';
import { StudiosService } from './studios.service';
import { StudiosController } from './studios.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Studio} from "./studio.model";
import {GamePublishers} from "../games/game-publishers.model";
import {GameStudios} from "../games/game-studios.model";
import {Game} from "../games/game.model";

@Module({
  providers: [StudiosService],
  controllers: [StudiosController],
  imports: [
    SequelizeModule.forFeature([Studio, Game, Studio, GamePublishers, GameStudios])
  ]
})
export class StudiosModule {}
