import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { IResponse } from '../interfaces';

@Injectable()
export class ResponseFormattingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<IResponse> | Promise<Observable<IResponse>> {
    return next.handle().pipe(
      map((data) => ({
        status: 'success',
        statusCode: 200,
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
