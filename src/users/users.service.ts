import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { SetRoleDto } from './dto/set-role.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService,
  ) {}
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.rolesService.getRoleByValue('USER');
    await user.$set('role', role.id);
    user.role = role;
    return user;
  }

  async getAllUsers() {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
  }

  async setRole(dto: SetRoleDto) {
    const user = await this.userRepository.findByPk(dto.user_id);
    const role = await this.rolesService.getRoleByValue(dto.value);
    if (user && role) {
      await user.$set('role', role.id);
      return dto;
    }

    throw new HttpException(
      'Пользовател или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }
}
