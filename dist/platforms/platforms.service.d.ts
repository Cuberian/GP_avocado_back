import { CreatePlatformDto } from './dto/create-platform.dto';
import { Platform } from './platform.model';
export declare class PlatformsService {
    private platformRepository;
    constructor(platformRepository: typeof Platform);
    createPlatform(dto: CreatePlatformDto): Promise<Platform>;
    getPlatformByTitle(title: string): Promise<Platform>;
    getAllPlatforms(): Promise<Platform[]>;
}
