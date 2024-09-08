export const MESSAGES = {
    SUCCESS: "Request processed successfully.",
    CREATED: "Resource created successfully.",
    UPDATED: "Resource updated successfully.",
    DELETED: "Resource deleted successfully.",
    FETCHED: "Data retrieved successfully.",

    BAD_REQUEST: "The request could not be understood or was missing required parameters.",
    UNAUTHORIZED: "Authentication failed or user does not have permissions for the desired action.",
    FORBIDDEN: "Access to the requested resource is forbidden.",
    NOT_FOUND: "The requested resource could not be found.",
    CONFLICT: "The request could not be completed due to a conflict with the current state of the resource.",
    INTERNAL_ERROR: "An unexpected error occurred on the server.",

    EMAIL_EXISTS: "Email already exists.",
    EMAIL_NOT_VERIFIED: "Email is not verified",
    USER_REGISTERED: "User registered successfully.",
    INVALID_CREDENTIALS: "Invalid email or password.",
    PASSWORD_FORMAT: 'Password must be at least 6 characters long, and include one uppercase letter, one lowercase letter, one symbol, and one number.',


    TOKEN_REQUIRED: "Authorization token is required.",
    INVALID_TOKEN: "The provided authorization token is invalid.",
    INVALID_REQUEST: "Invalid request data.",
    SESSION_EXISTS: "A session is already active.",
    RESOURCE_NOT_FOUND: "The specified resource could not be found.",
    PERMISSION_DENIED: "You do not have permission to perform this action.",

    REQUIRED_FIELD: "Some required fields are missing.",
    INVALID_FORMAT: "Each field must be in the correct format.",

    CARD_EXISTS: "Card number already exists.",
    INVALID_CARD: "Invalid card information.",
    INVALID_EXPIREDATE_FORMAT: 'expireDate must be in MM/YY format',
    INVALID_CVV_FORMAT: "CVV must be in 3 degit format",
    CARD_ALREADY_EXISTS: "Card already exists",
    TRANSACTION_FAILED: "Transaction could not be completed.",
    TRANSACTION_SUCCESS: "Transaction completed successfully.",
    ALREADY_EXISTS: "Record already exists",

    ALREADY_ACTIVE_SESSION: 'Only one active session is allowed at a time.',

    // Regular Expressions
    REGEX: {
        PASSWORD_FORMAT: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
        EXPIRE_CARD_DATE: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
    }
};
