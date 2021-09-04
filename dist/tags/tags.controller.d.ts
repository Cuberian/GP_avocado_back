import { CreateRoleDto } from "../roles/dto/create-role.dto";
import { TagsService } from "./tags.service";
export declare class TagsController {
    private tagsService;
    constructor(tagsService: TagsService);
    create(dto: CreateRoleDto): Promise<import("./tag.model").Tag>;
    getTagByValue(value: string): Promise<import("./tag.model").Tag>;
    getAllTags(): Promise<import("./tag.model").Tag[]>;
}
