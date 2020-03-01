import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('index')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 代表一个get方法
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
