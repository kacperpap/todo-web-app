import { Module } from '@nestjs/common';
import { GroupTodoService } from './group-todo.service';
import { GroupTodoController } from './group-todo.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [GroupTodoService],
  controllers: [GroupTodoController],
  imports: [PrismaModule],
})
export class GroupTodoModule {}
