import { Module } from '@nestjs/common';

import { ConnectRequestsModule } from './connect-requests/connect-requests.module';

@Module({
  imports: [

    ConnectRequestsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
