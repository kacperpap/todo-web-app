import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GroupTodoService } from './group-todo.service';
import { TokenGuard } from '../auth/token.guard';
import { UserID } from '../auth/user.decorator';
import { CreateGroupTodoDto } from './dto/create-group-todo.dto';
import { TodoGroupNotFoundException } from '../../exceptions/todo-group-not-found-exception';

@Controller('group-todo')
export class GroupTodoController {
  constructor(private groupTodoService: GroupTodoService) {}

  @Get()
  @UseGuards(TokenGuard)
  async listGroups(@UserID() userId: number) {
    return this.groupTodoService.listGroups(userId);
  }

  @Get(':id')
  @UseGuards(TokenGuard)
  async getGroup(
    @Param('id', ParseIntPipe) id: number,
    @UserID() userId: number,
  ) {
    const group = await this.groupTodoService.getGroupTodoById(id, userId);
    if (!group) throw new TodoGroupNotFoundException();

    return group;
  }

  @Post()
  @UseGuards(TokenGuard)
  addGroup(@Body() data: CreateGroupTodoDto, @UserID() userId: number) {
    return this.groupTodoService.addGroupTodo(data, userId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(TokenGuard)
  async deleteGroupTodo(
    @Param('id', ParseIntPipe) id: number,
    @UserID() userId: number,
  ) {
    const group = await this.groupTodoService.getGroupTodoById(id, userId);
    if (!group) throw new TodoGroupNotFoundException();

    await this.groupTodoService.deleteGroupTodo(id);
  }

  //TODO: put jako add todo do grupy

  // @Put(':id')
  // @UseGuards(TokenGuard)
  // async editGroupTodo(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() data: EditTodoDto,
  //   @UserID() userId: number,
  // ) {
  //   const todo = await this.todoService.getTodoById(id, userId);
  //   if (!todo) throw new TodoNotFoundException();
  //
  //   return this.todoService.editTodo(id, data);
  // }
}
