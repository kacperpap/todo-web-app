import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGroupTodoDto } from './dto/create-group-todo.dto';

@Injectable()
export class GroupTodoService {
  constructor(private readonly prisma: PrismaService) {}

  async listGroups(userId: number) {
    return this.prisma.todoGroup.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async getGroupTodoById(id: number, userId: number) {
    return this.prisma.todoGroup.findUnique({
      where: {
        id: id,
        userId: userId,
      },
    });
  }

  addGroupTodo(data: CreateGroupTodoDto, userId: number) {
    return this.prisma.todoGroup.create({
      data: {
        name: data.name,
        userId: userId,
      },
    });
  }

  async deleteGroupTodo(id: number) {
    return this.prisma.todoGroup.delete({
      where: {
        id: id,
      },
    });
  }

  async checkAccess(userId: number, groupId: number): Promise<boolean> {
    const group = await this.prisma.todoGroup.findUnique({
      where: {
        id: groupId,
        userId: userId,
      },
    });

    if (!group) return false;
    return true;
  }
}
