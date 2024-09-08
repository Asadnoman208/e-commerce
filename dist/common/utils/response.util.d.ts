import { HttpStatus } from '@nestjs/common';
export interface ApiResponse<T> {
    status: HttpStatus;
    message: string;
    data: T;
}
export declare function createResponse(status: HttpStatus, message: string, data: any): {
    status: HttpStatus;
    message: string;
    data: any;
};
