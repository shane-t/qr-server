import { Test, TestingModule } from '@nestjs/testing';
import { ConnectRequestsController } from './connect-requests.controller';

describe('ConnectRequestsController', () => {
  let controller: ConnectRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConnectRequestsController],
    }).compile();

    controller = module.get<ConnectRequestsController>(ConnectRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
