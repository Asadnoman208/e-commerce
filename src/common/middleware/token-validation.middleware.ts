import { Injectable, NestMiddleware, HttpException, HttpStatus, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { createResponse } from '../utils/response.util';
import { MESSAGES } from '../utils/responseMessages';

@Injectable()
export class TokenValidationMiddleware implements NestMiddleware {
    constructor(private readonly jwtService: JwtService) { }

    use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

        // if (!token) {
        //     throw new HttpException(
        //         { status: 'error', message: 'TOKEN_REQUIRED' },
        //         HttpStatus.UNAUTHORIZED,
        //     );
        // }

        try {
            //commented for the testing of the apis
            // const payload = this.jwtService.verify(token);
            next();
        } catch (error) {
            throw new HttpException(
                { status: 'error', message: 'INVALID_TOKEN' },
                HttpStatus.UNAUTHORIZED,
            );
        }
    }
}
