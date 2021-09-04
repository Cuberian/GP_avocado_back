import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "../roles/roles.service";
import {CreateRoleDto} from "../roles/dto/create-role.dto";
import {StudiosService} from "./studios.service";
import {CreateStudioDto} from "./dto/create-studio.dto";

@Controller('studios')
export class StudiosController {

    constructor(private studiosService: StudiosService) {}

    @Post()
    create(@Body() dto: CreateStudioDto) {
        return this.studiosService.createStudio(dto)
    }

    @Get('/:name')
    getByValue(@Param('name') name: string) {
        return this.studiosService.getStudiosByName(name)
    }

    @Get()
    getAll() {
        return this.studiosService.getAllStudios()
    }

}
