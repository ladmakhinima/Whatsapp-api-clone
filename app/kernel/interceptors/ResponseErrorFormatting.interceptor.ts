import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ResponseErrorFormattingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((error) => {
        const formatErr = {
          status: 'failed',
          statusCode: error.statusCode || 500,
          data: error.message,
        };
        return throwError(formatErr);
      }),
    );
  }
}
