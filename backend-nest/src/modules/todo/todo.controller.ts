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
  Query,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoNotFoundException } from '../../exceptions/todo-not-found-exception';
import { EditTodoDto } from './dto/edit-todo.dto';
import { TodoFilterDto } from './dto/todo-filter.dto';
import { TokenGuard } from '../auth/token.guard';
import { TodoGroupGuard } from '../auth/todo-group.guard';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get(':groupTodoId')
  @UseGuards(TokenGuard, TodoGroupGuard)
  listTodo(
    @Query() filter: TodoFilterDto,
    @Param('groupTodoId', ParseIntPipe) todoGroupId: number,
  ) {
    return this.todoService.listTodo(filter, todoGroupId);
  }

  @Get(':groupTodoId/:id')
  @UseGuards(TokenGuard, TodoGroupGuard)
  async getTodo(
    @Param('groupTodoId', ParseIntPipe) todoGroupId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const todo = await this.todoService.getTodoById(id, todoGroupId);
    if (!todo) throw new TodoNotFoundException();

    return todo;
  }

  @Post(':groupTodoId/')
  @UseGuards(TokenGuard, TodoGroupGuard)
  addTodo(
    @Body() data: CreateTodoDto,
    @Param('groupTodoId', ParseIntPipe) todoGroupId: number,
  ) {
    return this.todoService.addTodo(data, todoGroupId);
  }

  @Delete(':groupTodoId/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(TokenGuard, TodoGroupGuard)
  async deleteTodo(
    @Param('id', ParseIntPipe) id: number,
    @Param('groupTodoId', ParseIntPipe) todoGroupId: number,
  ) {
    const todo = await this.todoService.getTodoById(id, todoGroupId);
    if (!todo) throw new TodoNotFoundException();

    await this.todoService.deleteTodo(id);
  }

  @Put(':groupTodoId/:id')
  @UseGuards(TokenGuard, TodoGroupGuard)
  async editTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: EditTodoDto,
    @Param('groupTodoId', ParseIntPipe) todoGroupId: number,
  ) {
    const todo = await this.todoService.getTodoById(id, todoGroupId);
    if (!todo) throw new TodoNotFoundException();

    return this.todoService.editTodo(id, data);
  }
}
