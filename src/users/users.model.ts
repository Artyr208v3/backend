import { ApiProperty } from "@nestjs/swagger";
import {
  DataType,
  Column,
  Model,
  Table,
  BelongsToMany,
  HasMany,
  Max,
} from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Вика", description: "Имя" })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @ApiProperty({ example: "Шевченко", description: "Фамилия" })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  surname: string;

  @ApiProperty({ example: "lorem ipsum dolor sit amet consectetur adipisicing elit", description: "Описание" })
  @Column({
    type: DataType.STRING(1000),
  })
  description: string;

  @ApiProperty({ example: "user.jpg", description: "Картинка профиля" })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ApiProperty({ example: "user@email.ru", description: "Почтовый ящик" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "12345678", description: "Пароль" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: "true", description: "Забанен или нет" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({ example: "За хулиганство", description: "Причина бана" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
    posts: Post[];
}
