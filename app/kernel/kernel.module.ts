import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Prisma } from './prisma/prisma.service';

@Module({ imports: [ConfigModule.forRoot({ isGlobal: true }), Prisma] })
export class KernelModule {}
