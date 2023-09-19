import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { isMongoId } from 'class-validator';

const INVALID_MONGOID = 'invalid mongo id';

export class IsMongoIdPipe implements PipeTransform<any> {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!isMongoId(value)) throw new BadRequestException(INVALID_MONGOID);
    return value;
  }
}
