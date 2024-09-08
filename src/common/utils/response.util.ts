import { HttpStatus } from '@nestjs/common';

export interface ApiResponse<T> {
    status: HttpStatus;
    message: string;
    data: T;
}

export function createResponse(status: HttpStatus, message: string, data: any) {
    return {
        status,
        message,
        data: data || [],
    };
}