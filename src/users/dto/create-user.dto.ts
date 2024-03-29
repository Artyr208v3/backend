import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "Vasya", description: "Имя пользователя" })
  @IsString({ message: "Должно быть строкой" })
  readonly name: string;
  @ApiProperty({ example: "Pupkin", description: "Фамилия пользователя" })
  @IsString({ message: "Должно быть строкой" })
  readonly surname: string;
  @ApiProperty({ example: "user@email.ru", description: "Почтовый ящик" })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;
  @ApiProperty({ example: "12345678", description: "Пароль" })
  @IsString({ message: "Должно быть строкой" })
  @Length(4, 16, { message: "Должно быть не менее 4 и не более 16" })
  readonly password: string;
}
