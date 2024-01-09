import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { EditTodoDto } from './dto/edit-todo.dto';
import { TodoFilterDto } from './dto/todo-filter.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}
  async listTodo(filter: TodoFilterDto, todoGroupId: number) {
    return this.prisma.todo.findMany({
      where: {
        todoGroupId: todoGroupId,
        done: filter.isDone,
      },
      orderBy: {
        [filter.sortBy]: filter.sortOrder,
      },
    });
  }
  async addTodo(data: CreateTodoDto, groupId: number) {
    return this.prisma.todo.create({
      data: {
        title: data.title,
        content: data.content,
        done: data.done,
        todoGroupId: groupId,
      },
    });
  }

  editTodo(id: number, data: EditTodoDto) {
    return this.prisma.todo.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  deleteTodo(id: number) {
    return this.prisma.todo.delete({
      where: {
        id: id,
      },
    });
  }

  getTodoById(id: number, groupId: number) {
    return this.prisma.todo.findUnique({
      where: {
        id: id,
        todoGroupId: groupId,
      },
    });
  }
}
