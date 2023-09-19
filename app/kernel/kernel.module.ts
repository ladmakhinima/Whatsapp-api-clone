import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KernelService } from './kernel.service';
import { LocalizationModule } from './localization/localization.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // PrismaModule,
    LocalizationModule,
  ],
  providers: [KernelService],
  exports: [KernelService],
})
export class KernelModule {}
