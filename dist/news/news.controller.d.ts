import { NewsService } from "./news.service";
import { CreateNewsDto } from "./dto/create-news.dto";
import { UpdateNewsDto } from "./dto/update-news.dto";
export declare class NewsController {
    private newsService;
    constructor(newsService: NewsService);
    create(dto: CreateNewsDto): Promise<import("./news.model").News>;
    update(dto: UpdateNewsDto): Promise<import("./news.model").News>;
    getById(id: number): Promise<import("./news.model").News>;
    deleteById(id: number): Promise<void>;
    getAll(): Promise<import("./news.model").News[]>;
    uploadFile(file: any, body: any): Promise<import("./news.model").News>;
    findCoverImage(filename: any, res: any): import("rxjs").Observable<any>;
    deleteCoverImage(body: any): Promise<import("./news.model").News>;
}
