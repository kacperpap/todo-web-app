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
  Put,
  UseGuards,
} from '@nestjs/common';
import { GroupTodoService } from './group-todo.service';
import { TokenGuard } from '../auth/token.guard';
import { UserID } from '../auth/user.decorator';
import { CreateGroupTodoDto } from './dto/create-group-todo.dto';
import { TodoGroupNotFoundException } from '../../exceptions/todo-group-not-found-exception';
import { EditGroupTodoDto } from './dto/edit-group-todo.dto';

/***
 There is no urge to use TodoGroupGuard here, cause
 every request have additional userId, which is used
 as a parameter to where clause in database query
 thus we look for todos group only in groups with specified userId
 ***/

/***
 In POST and PUT it is needed to create or update table,
 that will be a mediator between Category and TodoGroup
 ***/

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

  @Put(':id')
  @UseGuards(TokenGuard)
  async editGroupTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: EditGroupTodoDto,
    @UserID() userId: number,
  ) {
    const todo = await this.groupTodoService.getGroupTodoById(id, userId);
    if (!todo) throw new TodoGroupNotFoundException();

    return this.groupTodoService.editGroupTodo(id, data);
  }
}
