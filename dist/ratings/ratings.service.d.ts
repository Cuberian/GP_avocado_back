import { Rating } from "./rating.model";
import { CreateRatingDto } from "./dto/create-rating.dto";
export declare class RatingsService {
    private ratingRepository;
    constructor(ratingRepository: typeof Rating);
    createRating(dto: CreateRatingDto): Promise<Rating>;
    getRatingsByUserId(user_id: number): Promise<Rating[]>;
    getRatingsByGameId(game_id: number): Promise<Rating[]>;
}
