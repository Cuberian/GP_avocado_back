import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Tag} from "./tag.model";
import {NewsTags} from "./news-tags.model";
import {News} from "../news/news.model";

@Module({
  controllers: [TagsController],
  providers: [TagsService],
  imports: [
    SequelizeModule.forFeature([Tag, News, NewsTags])
  ],
  exports: [
      TagsService
  ]
})
export class TagsModule {}
