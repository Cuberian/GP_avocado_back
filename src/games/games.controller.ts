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
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
import { FileInterceptor } from '@nestjs/platform-express';
import { of } from 'rxjs';
import { join } from 'path';
import { UpdateNewsDto } from '../news/dto/update-news.dto';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Post()
  create(@Body() dto: CreateGameDto) {
    return this.gamesService.createGame(dto);
  }

  @Put()
  update(@Body() dto: UpdateGameDto) {
    return this.gamesService.updateGame(dto);
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.gamesService.getGameById(id);
  }

  @Get('/:title')
  getByTitle(@Param('title') title: string) {
    return this.gamesService.getGamesByTitle(title);
  }

  @Get()
  getAll() {
    return this.gamesService.getAllGames();
  }

  @Post('/covers/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/game-covers',
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
    const { gameId } = body;
    return this.gamesService.setCover(Number(gameId), file.filename);
  }

  @Get('/covers/:filename')
  findCoverImage(@Param('filename') filename, @Res() res) {
    return of(
      res.sendFile(join(process.cwd(), 'uploads/game-covers/' + filename)),
    );
  }

  @Post('/covers/delete')
  deleteCoverImage(@Body() body) {
    return this.gamesService.deleteCover(body.gameId);
  }
}
