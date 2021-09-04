import {Controller, Post, Body, Get, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {SetRoleDto} from "./dto/set-role.dto";
import {fileURLToPath} from "url";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/role')
    setRole(@Body() dto: SetRoleDto) {
        return this.usersService.setRole(dto)
    }
}
