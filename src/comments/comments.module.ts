import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Comment } from './comment.model';
import {SequelizeModule} from "@nestjs/sequelize";
import {News} from "../news/news.model";
import {User} from "../users/user.model";

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports: [
    SequelizeModule.forFeature([Comment, User, News])
  ]
})
export class CommentsModule {}
