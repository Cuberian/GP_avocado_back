import { Tag } from "./tag.model";
import { CreateTagDto } from "./dto/create-tag.dto";
import { NewsTags } from "./news-tags.model";
export declare class TagsService {
    private tagRepository;
    private newsTagsRepository;
    constructor(tagRepository: typeof Tag, newsTagsRepository: typeof NewsTags);
    createTag(dto: CreateTagDto): Promise<Tag>;
    getByValue(value: string): Promise<Tag>;
    getAll(): Promise<Tag[]>;
    deleteAllNewsTags(newsId: number): Promise<void>;
}
