import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilsService {
  public async hash(value: string): Promise<string> {
    const saltOrRounds = await bcrypt.genSalt();
    return bcrypt.hash(value, saltOrRounds);
  }

  public async compareHash(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }

  public static throwHttpException(status: HttpStatus, message: string) {
    throw new HttpException(
      {
        status: status,
        error: message,
      },
      status,
    );
  }
}
