import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
import { join } from 'path';
import { of } from 'rxjs';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Post()
  create(@Body() dto: CreateNewsDto) {
    return this.newsService.createNews(dto);
  }
  @Put()
  update(@Body() dto: UpdateNewsDto) {
    return this.newsService.updateNews(dto);
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.newsService.getNewsById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.newsService.deleteNewsById(id);
  }

  @Get()
  getAll() {
    return this.newsService.getAllNews();
  }

  @Post('/covers/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/covers',
        filename: (req, file, cb) => {
          const filename: string =
            path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
          const extension: string = path.parse(file.originalname).ext;

          cb(null, `${filename}${extension}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file, @Body() body) {
    const { newsId } = body;
    return this.newsService.setCover(Number(newsId), file.filename);
  }

  @Get('/covers/:filename')
  findCoverImage(@Param('filename') filename, @Res() res) {
    return of(res.sendFile(join(process.cwd(), 'uploads/covers/' + filename)));
  }

  @Post('/covers/delete')
  deleteCoverImage(@Body() body) {
    return this.newsService.deleteCover(body.newsId);
  }
}
