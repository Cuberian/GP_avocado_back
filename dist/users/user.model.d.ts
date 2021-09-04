import { Model } from "sequelize-typescript";
import { Role } from "../roles/role.model";
interface UserCreationAttributes {
    nickname: string;
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttributes> {
    id: number;
    nickname: string;
    email: string;
    password: string;
    role_id: number;
    role: Role;
}
export {};
