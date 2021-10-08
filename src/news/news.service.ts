import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { News } from './news.model';
import { CreateNewsDto } from './dto/create-news.dto';
import { TagsService } from '../tags/tags.service';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News) private newsRepository: typeof News,
    private tagsService: TagsService,
  ) {}

  async createNews(dto: CreateNewsDto) {
    const { header, text, views, record_type, author_id, tags } = dto;
    const news = await this.newsRepository.create({
      header,
      text,
      views,
      record_type,
      author_id,
    });

    if (tags && tags.length > 0) {
      const tagsIdArray = [];

      for (const tag of tags) {
        const existTag = await this.tagsService.getByValue(tag);
        if (!existTag) {
          const newTag = await this.tagsService.createTag({ value: tag });
          tagsIdArray.push(newTag.id);
          continue;
        }
        tagsIdArray.push(existTag.id);
      }

      await news.$set('tags', tagsIdArray);
    }

    return news;
  }

  async updateNews(dto: UpdateNewsDto) {
    const { newsId, header, text, tags } = dto;
    const news = await this.newsRepository.findByPk(newsId);
    const newNews = await news.update({ header, text });

    if (tags && tags.length > 0) {
      const tagsIdArray = [];

      for (const tag of tags) {
        const existTag = await this.tagsService.getByValue(tag);

        if (!existTag) {
          const newTag = await this.tagsService.createTag({ value: tag });
          tagsIdArray.push(newTag.id);
          continue;
        }

        tagsIdArray.push(existTag.id);
      }

      await news.$set('tags', tagsIdArray);
    } else {
      await this.tagsService.deleteAllNewsTags(newsId);
    }

    return news;
  }

  async getNewsById(id: number) {
    return await this.newsRepository.findByPk(id, { include: { all: true } });
  }

  async deleteNewsById(id: number) {
    const news = await this.newsRepository.findByPk(id);
    return await news.destroy();
  }

  async getAllNews() {
    return await this.newsRepository.findAll();
  }

  async setCover(newsId: number, coverImage: string) {
    const news = await this.newsRepository.findByPk(newsId);
    return await news.update({ coverImage: coverImage });
  }

  async deleteCover(newsId: number) {
    const news = await this.newsRepository.findByPk(newsId);
    return await news.update({ coverImage: null });
  }
}
