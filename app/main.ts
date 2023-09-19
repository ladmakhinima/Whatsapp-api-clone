import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { KernelService } from './kernel/kernel.service';
import { AppModule } from './app.module';

const bootstrapApp = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const kernelService = await app.get(KernelService);
  const configService = await app.get(ConfigService);

  kernelService.attachCore(app);
  const KERNEL_PORT = configService.get<number>('KERNEL_PORT');

  app.listen(KERNEL_PORT, () => {
    console.log(`the app is running at ${KERNEL_PORT}`);
  });
};

bootstrapApp();
