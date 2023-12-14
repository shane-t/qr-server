import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ConnectRequestsService } from './connect-requests.service';
import { CreateConnectRequestDto } from './dto/connect-request.dto';

@Controller('connect-requests')
export class ConnectRequestsController {

  constructor(private readonly connectRequestsService: ConnectRequestsService
  ) {
  }

  @Post('/')
  create(
    @Body() createConnectRequestDto: CreateConnectRequestDto
  ) {
    return this.connectRequestsService.create(createConnectRequestDto);
  }

  @Get('/')
  findAll() {
    return this.connectRequestsService.findAll();
  }

  @Get('/latest')
  findLatest() {
    return this.connectRequestsService.findLatest();
  }

  @Delete('/latest')
  deleteLatest() {
    return this.connectRequestsService.deleteLatest();
  }
}
