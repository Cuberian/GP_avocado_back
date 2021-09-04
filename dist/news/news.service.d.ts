import { News } from "./news.model";
import { CreateNewsDto } from "./dto/create-news.dto";
import { TagsService } from "../tags/tags.service";
import { UpdateNewsDto } from "./dto/update-news.dto";
export declare class NewsService {
    private newsRepository;
    private tagsService;
    constructor(newsRepository: typeof News, tagsService: TagsService);
    createNews(dto: CreateNewsDto): Promise<News>;
    updateNews(dto: UpdateNewsDto): Promise<News>;
    getNewsById(id: number): Promise<News>;
    deleteNewsById(id: number): Promise<void>;
    getAllNews(): Promise<News[]>;
    setCover(newsId: number, coverImage: string): Promise<News>;
    deleteCover(newsId: number): Promise<News>;
}
