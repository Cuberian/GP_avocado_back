import { Studio } from "./studio.model";
import { CreateStudioDto } from "./dto/create-studio.dto";
export declare class StudiosService {
    private studioRepository;
    constructor(studioRepository: typeof Studio);
    createStudio(dto: CreateStudioDto): Promise<Studio>;
    getStudiosByName(name: string): Promise<Studio>;
    getAllStudios(): Promise<Studio[]>;
}
