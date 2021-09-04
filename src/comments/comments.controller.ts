import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateRoleDto} from "../roles/dto/create-role.dto";
import {CommentsService} from "./comments.service";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Controller('comments')
export class CommentsController {

    constructor(private commentsService: CommentsService) {}

    @Post()
    create(@Body() dto: CreateCommentDto) {
        return this.commentsService.createComment(dto)
    }

    @Get('/user/:userId')
    getByUserId(@Param('userId') userId: number) {
        return this.commentsService.getCommentsByUserId(userId)
    }

    @Get('/news/:newsId')
    getByNewsId(@Param('newsId') newsId: number) {
        return this.commentsService.getAllCommentsByNewsId(newsId)
    }

}
