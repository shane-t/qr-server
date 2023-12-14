import { Module } from '@nestjs/common';
import { ConnectRequestsController } from './connect-requests.controller';
import { ConnectRequestsService } from './connect-requests.service';

@Module({
  controllers: [ConnectRequestsController],
  providers: [ConnectRequestsService]
})
export class ConnectRequestsModule {}
