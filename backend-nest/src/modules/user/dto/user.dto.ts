import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserDto implements User {
  @Exclude()
  password: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  terms: boolean;

  id: number;
  name: string;
  email: string;
}
