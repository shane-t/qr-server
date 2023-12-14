import { Injectable } from '@nestjs/common';
import { ConnectRequest } from './entities/connect-request.entity';

@Injectable()
export class ConnectRequestsService {

  connectRequests: ConnectRequest[] = [];

  create(createConnectRequestDto: any) {
    const connectRequest = new ConnectRequest();
    connectRequest.token = createConnectRequestDto.token;
    connectRequest.apiUrl = createConnectRequestDto.apiUrl;
    connectRequest.feature = createConnectRequestDto.feature;
    connectRequest.service = createConnectRequestDto.service;
    connectRequest.environment = createConnectRequestDto.environment;
    this.connectRequests.push(connectRequest);
    return connectRequest;    
  }

  findAll() {
    return this.connectRequests;
  }

  findLatest() {
    return this.connectRequests[this.connectRequests.length - 1];
  }

  deleteLatest() {
    this.connectRequests.pop();
  }

}
