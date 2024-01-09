import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupTodoDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
