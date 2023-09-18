import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class Prisma {
  @Inject(PrismaClient)
  private readonly prismaClient: PrismaClient;

  getClient() {
    return this.prismaClient;
  }
}
