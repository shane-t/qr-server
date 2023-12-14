import { Test, TestingModule } from '@nestjs/testing';
import { ConnectRequestsService } from './connect-requests.service';

describe('ConnectRequestsService', () => {
  let service: ConnectRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectRequestsService],
    }).compile();

    service = module.get<ConnectRequestsService>(ConnectRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
