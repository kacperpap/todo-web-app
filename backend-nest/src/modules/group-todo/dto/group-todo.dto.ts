import { Exclude } from 'class-transformer';

export class GroupTodoDto {
  id: number;
  name: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  userId: number;
}
