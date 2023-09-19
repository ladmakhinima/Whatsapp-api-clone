import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { I18nContext, I18nService } from 'nestjs-i18n';

@Injectable()
@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly i18nService: I18nContext) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const statusCode = exception.getStatus();
    console.log(this.i18nService);
    response.status(statusCode).json({
      data: {
        message: this.i18nService.translate(exception.message),
        path: request.url,
      },
      status: 'error',
      statusCode: statusCode,
      timestamp: new Date().toISOString(),
    });
  }
}
