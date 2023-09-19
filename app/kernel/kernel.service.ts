import { Injectable, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { GlobalExceptionFilter } from './filters';
import {
  LoggerMiddleware,
  RateLimiterMiddleware,
  SecurityMiddleware,
} from './middlewares';
import { ResponseFormattingInterceptor } from './interceptors';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class KernelService {
  attachCore(app: NestExpressApplication) {
    // global filters
    app.useGlobalFilters(new GlobalExceptionFilter(app.get(I18nService)));

    // global middlewares
    app.use(
      new LoggerMiddleware().use,
      new RateLimiterMiddleware().use,
      new SecurityMiddleware().use,
    );

    // global interceptors
    app.useGlobalInterceptors(new ResponseFormattingInterceptor());

    // global pipes
    app.useGlobalPipes(new ValidationPipe());
  }
}
