import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GroupTodoService } from '../group-todo/group-todo.service';

@Injectable()
export class TodoGroupGuard implements CanActivate {
  constructor(private readonly todoGroupService: GroupTodoService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const userId = parseInt(request.userId);
    const todoGroupId = parseInt(request.params.groupTodoId);

    if (!userId || !todoGroupId) return false;

    return this.todoGroupService.checkAccess(userId, todoGroupId);
  }
}
