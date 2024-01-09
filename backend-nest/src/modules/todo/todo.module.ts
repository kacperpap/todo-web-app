import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { GroupTodoModule } from '../group-todo/group-todo.module';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [PrismaModule, GroupTodoModule],
  exports: [TodoService],
})
export class TodoModule {}
