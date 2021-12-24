import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from '../roles/dto/create-role.dto';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { PlatformsService } from './platforms.service';

@Controller('platforms')
export class PlatformsController {
  constructor(private platformsService: PlatformsService) {}

  @Post()
  create(@Body() dto: CreatePlatformDto) {
    return this.platformsService.createPlatform(dto);
  }

  @Get('/:title')
  getByTitle(@Param('title') title: string) {
    return this.platformsService.getPlatformByTitle(title);
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.platformsService.getPlatformById(id);
  }

  @Get()
  getAll() {
    return this.platformsService.getAllPlatforms();
  }
}
