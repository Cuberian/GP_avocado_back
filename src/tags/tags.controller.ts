import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from '../roles/dto/create-role.dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.tagsService.createTag(dto);
  }

  @Get('/:value')
  getTagByValue(@Param('value') value: string) {
    return this.tagsService.getByValue(value);
  }

  @Get()
  getAllTags() {
    return this.tagsService.getAll();
  }
}
