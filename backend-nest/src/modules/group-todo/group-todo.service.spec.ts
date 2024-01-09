import { Test, TestingModule } from '@nestjs/testing';
import { GroupTodoService } from './group-todo.service';

describe('GroupTodoService', () => {
  let service: GroupTodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupTodoService],
    }).compile();

    service = module.get<GroupTodoService>(GroupTodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
