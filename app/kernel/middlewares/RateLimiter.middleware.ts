import { Injectable, NestMiddleware } from '@nestjs/common';
import rateLimit from 'express-rate-limit';

@Injectable()
export class RateLimiterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    rateLimit({
      max: 100,
      statusCode: 409,
    })(req, res, next);
  }
}
