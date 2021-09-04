import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(dto: CreateRoleDto): Promise<import("./role.model").Role>;
    getByValue(value: string): Promise<import("./role.model").Role>;
    getAll(): Promise<import("./role.model").Role[]>;
}
