import { Test, TestingModule } from '@nestjs/testing';
import { GroupTodoController } from './group-todo.controller';

describe('GroupTodoController', () => {
  let controller: GroupTodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupTodoController],
    }).compile();

    controller = module.get<GroupTodoController>(GroupTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
