/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { INewGuests } from './app.controller';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello form Aurora Party';
  }
  newGuests(data: INewGuests) {
    return this.prisma.guests.create({
      data: {
        name: data.name,
        kids: data.kids,
        adults: data.adults,
      },
    });
  }
}
