import { StudiosService } from "./studios.service";
import { CreateStudioDto } from "./dto/create-studio.dto";
export declare class StudiosController {
    private studiosService;
    constructor(studiosService: StudiosService);
    create(dto: CreateStudioDto): Promise<import("./studio.model").Studio>;
    getByValue(name: string): Promise<import("./studio.model").Studio>;
    getAll(): Promise<import("./studio.model").Studio[]>;
}
