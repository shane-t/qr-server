import { Test, TestingModule } from '@nestjs/testing';
import { TodoitemsService } from './todoitems.service';

describe('TodoitemsService', () => {
  let service: TodoitemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoitemsService],
    }).compile();

    service = module.get<TodoitemsService>(TodoitemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
