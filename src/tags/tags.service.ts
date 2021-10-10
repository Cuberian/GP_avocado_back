import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './tag.model';
import { CreateTagDto } from './dto/create-tag.dto';
import { NewsTags } from './news-tags.model';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag) private tagRepository: typeof Tag,
    @InjectModel(NewsTags) private newsTagsRepository: typeof NewsTags,
  ) {}

  async createTag(dto: CreateTagDto) {
    return await this.tagRepository.create(dto);
  }

  async getByValue(value: string) {
    return await this.tagRepository.findOne({ where: { value } });
  }

  async getAll() {
    return await this.tagRepository.findAll();
  }

  async deleteAllNewsTags(newsId: number) {
    return await this.newsTagsRepository
      .findAll({ where: { newsId } })
      .then((r) => {
        for (const tag of r) {
          tag.destroy();
        }
      });
  }
}
