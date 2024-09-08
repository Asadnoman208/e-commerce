"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HttpExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let HttpExceptionFilter = HttpExceptionFilter_1 = class HttpExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(HttpExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode = exception.getStatus() || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        var message = exception.message || 'An error occurred';
        let validationErrors = null;
        if (exception instanceof common_1.BadRequestException) {
            const responseBody = exception.getResponse();
            if (Array.isArray(responseBody.message)) {
                validationErrors = responseBody.message;
                message = responseBody.message?.toString();
            }
            else {
                message = responseBody.message;
            }
        }
        const body = {
            status: statusCode,
            message,
            data: validationErrors || null
        };
        this.logger.warn(`${statusCode} ${message}`);
        response.status(statusCode).json(body);
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = HttpExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException, common_1.BadRequestException)
], HttpExceptionFilter);
//# sourceMappingURL=http-exception.filter.js.map