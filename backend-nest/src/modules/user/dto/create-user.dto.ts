import { IsBoolean, IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsBoolean()
  terms: boolean;

  @IsString()
  @MinLength(8)
  password: string;
}
