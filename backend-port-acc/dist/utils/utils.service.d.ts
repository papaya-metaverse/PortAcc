import { HttpStatus } from '@nestjs/common';
export declare class UtilsService {
    hash(value: string): Promise<string>;
    compareHash(value: string, hash: string): Promise<boolean>;
    static throwHttpException(status: HttpStatus, message: string): void;
}
