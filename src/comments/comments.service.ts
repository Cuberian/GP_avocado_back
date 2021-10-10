import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comment.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment) private commentRepository: typeof Comment,
  ) {}

  async createComment(dto: CreateCommentDto) {
    return await this.commentRepository.create(dto);
  }

  async getCommentsByUserId(userId: number) {
    return await this.commentRepository.findAll({
      where: { author_id: userId },
    });
  }

  async getAllCommentsByNewsId(newsId: number) {
    return await this.commentRepository.findAll({ where: { news_id: newsId } });
  }
}
