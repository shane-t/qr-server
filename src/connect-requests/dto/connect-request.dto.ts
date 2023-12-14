import { ApiProperty } from "@nestjs/swagger";

export class CreateConnectRequestDto {
  @ApiProperty()
  token: string;
  @ApiProperty()
  apiUrl: string;
  @ApiProperty()
  feature: string;
  @ApiProperty()
  service: string;
  @ApiProperty()
  environment: string;
}