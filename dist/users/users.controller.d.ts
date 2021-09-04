import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { SetRoleDto } from "./dto/set-role.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<import("./user.model").User>;
    getAll(): Promise<import("./user.model").User[]>;
    setRole(dto: SetRoleDto): Promise<SetRoleDto>;
}
