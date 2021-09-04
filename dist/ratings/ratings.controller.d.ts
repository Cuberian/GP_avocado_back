import { RatingsService } from "./ratings.service";
import { CreateRatingDto } from "./dto/create-rating.dto";
export declare class RatingsController {
    private ratingsService;
    constructor(ratingsService: RatingsService);
    create(dto: CreateRatingDto): Promise<import("./rating.model").Rating>;
    getByGameId(game: number): Promise<import("./rating.model").Rating[]>;
    getByUserId(user: number): Promise<import("./rating.model").Rating[]>;
}
