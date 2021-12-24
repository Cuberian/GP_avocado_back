import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { Platform } from './platform.model';

@Injectable()
export class PlatformsService {
  constructor(
    @InjectModel(Platform) private platformRepository: typeof Platform,
  ) {}

  async createPlatform(dto: CreatePlatformDto) {
    return await this.platformRepository.create(dto);
  }

  async getPlatformById(id: number) {
    return await this.platformRepository.findOne({ where: { id } });
  }

  async getPlatformByTitle(title: string) {
    return await this.platformRepository.findOne({ where: { title } });
  }

  async getAllPlatforms() {
    return await this.platformRepository.findAll();
  }
}
