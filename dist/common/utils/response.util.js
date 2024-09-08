"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = createResponse;
function createResponse(status, message, data) {
    return {
        status,
        message,
        data: data || [],
    };
}
//# sourceMappingURL=response.util.js.map