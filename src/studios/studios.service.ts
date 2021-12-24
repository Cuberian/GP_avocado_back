import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Studio } from './studio.model';
import { CreateStudioDto } from './dto/create-studio.dto';

@Injectable()
export class StudiosService {
  constructor(@InjectModel(Studio) private studioRepository: typeof Studio) {}

  async createStudio(dto: CreateStudioDto) {
    return await this.studioRepository.create(dto);
  }

  async getStudiosByName(name: string) {
    return await this.studioRepository.findOne({ where: { name } });
  }

  async getStudiosById(id: number) {
    return await this.studioRepository.findOne({ where: { id } });
  }

  async getAllStudios() {
    return await this.studioRepository.findAll();
  }
}
