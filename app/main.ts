import { NestFactory } from '@nestjs/core';
import { KernelModule } from './kernel/kernel.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

const bootstrapApp = async () => {
  const kernel = await NestFactory.create<NestExpressApplication>(KernelModule);
  const configService = await kernel.get(ConfigService);

  const KERNEL_PORT = configService.get<number>('KERNEL_PORT');

  kernel.enableCors({ origin: ['*'] });

  kernel.listen(KERNEL_PORT, () => {
    console.log(`the app is running at ${KERNEL_PORT}`);
  });
};

bootstrapApp();
