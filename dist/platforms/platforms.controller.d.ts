import { CreatePlatformDto } from './dto/create-platform.dto';
import { PlatformsService } from './platforms.service';
export declare class PlatformsController {
    private platformsService;
    constructor(platformsService: PlatformsService);
    create(dto: CreatePlatformDto): Promise<import("./platform.model").Platform>;
    getByValue(title: string): Promise<import("./platform.model").Platform>;
    getAll(): Promise<import("./platform.model").Platform[]>;
}
