import { CommentsService } from "./comments.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    create(dto: CreateCommentDto): Promise<import("./comment.model").Comment>;
    getByUserId(userId: number): Promise<import("./comment.model").Comment[]>;
    getByNewsId(newsId: number): Promise<import("./comment.model").Comment[]>;
}
