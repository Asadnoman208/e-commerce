import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger, HttpStatus, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException, BadRequestException) // Catch both HttpException and BadRequestException
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const statusCode = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
        var message = exception.message || 'An error occurred';

        // Handle validation errors separately
        let validationErrors = null;
        if (exception instanceof BadRequestException) {
            const responseBody = exception.getResponse() as { message: string | string[] };
            if (Array.isArray(responseBody.message)) {
                validationErrors = responseBody.message; // Capture validation errors
                message = responseBody.message?.toString();
            } else {
                message = responseBody.message; // Use the message from BadRequestException
            }
        }

        const body = {
            status: statusCode,
            message,
            data: validationErrors || null // Include validation errors if any
        };

        this.logger.warn(`${statusCode} ${message}`);

        response.status(statusCode).json(body);
    }
}
