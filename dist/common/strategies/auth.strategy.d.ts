declare const AuthStrategy_base: new (...args: any[]) => any;
export declare class AuthStrategy extends AuthStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
