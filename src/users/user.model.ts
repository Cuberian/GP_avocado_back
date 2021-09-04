import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Role} from "../roles/role.model";

interface UserCreationAttributes {
    nickname: string,
    email: string,
    password: string,
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    nickname: string;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    role_id: number;

    @BelongsTo(() => Role, 'role_id')
    role: Role;
}
