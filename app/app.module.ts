import { Module } from '@nestjs/common';
import { KernelModule } from './kernel/kernel.module';
import { UsersModule } from './src/users/users.module';

@Module({ imports: [KernelModule, UsersModule] })
export class AppModule {}
