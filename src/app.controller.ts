import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

export interface INewGuests {
  name: string;
  kids: number;
  adults: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  newGuests(@Body() data: INewGuests) {
    return this.appService.newGuests(data);
  }
}
