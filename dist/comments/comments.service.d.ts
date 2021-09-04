import { Comment } from "./comment.model";
import { CreateCommentDto } from "./dto/create-comment.dto";
export declare class CommentsService {
    private commentRepository;
    constructor(commentRepository: typeof Comment);
    createComment(dto: CreateCommentDto): Promise<Comment>;
    getCommentsByUserId(userId: number): Promise<Comment[]>;
    getAllCommentsByNewsId(newsId: number): Promise<Comment[]>;
}
