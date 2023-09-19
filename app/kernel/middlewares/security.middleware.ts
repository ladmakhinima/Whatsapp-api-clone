import { Injectable, NestMiddleware } from '@nestjs/common';
import * as cors from 'cors';
import helmet from 'helmet';

@Injectable()
export class SecurityMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    cors({ origin: ['*'] });
    helmet()(req, res, (error) => {
      if (error) {
        console.log('Helmet has error');
      }
      cors({ origin: ['*'] })(req, res, next);
    });
  }
}
