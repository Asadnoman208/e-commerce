"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomEmail = void 0;
const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    const domain = "gmail.com";
    return `Test${randomString}@${domain}`;
};
exports.generateRandomEmail = generateRandomEmail;
//# sourceMappingURL=utils.js.map