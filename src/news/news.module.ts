import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { News } from './news.model';
import { User } from '../users/user.model';
import { Tag } from '../tags/tag.model';
import { NewsTags } from '../tags/news-tags.model';
import { TagsModule } from '../tags/tags.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [NewsService],
  controllers: [NewsController],
  imports: [
    TagsModule,
    AuthModule,
    SequelizeModule.forFeature([News, User, Tag, NewsTags]),
  ],
})
export class NewsModule {}
