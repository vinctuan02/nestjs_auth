export class ErrorRes<T> {
    message: string;
    messageCode?: string;
    errors?: T;
    statusCode: number;

    constructor(message: string, errors?: T, messageCode?: string, statusCode?: number);
    constructor(params: { message: string; errors?: T; messageCode?: string; statusCode?: number });
    constructor(
        messageOrParams: string | { message: string; errors?: T; messageCode?: string; statusCode?: number },
        errors?: T,
        messageCode?: string,
        statusCode: number = 400
    ) {
        if (typeof messageOrParams === 'string') {
            // Truyền theo dạng (message, errors, messageCode, statusCode)
            this.message = messageOrParams;
            this.errors = errors;
            this.messageCode = messageCode;
            this.statusCode = statusCode;
        } else {
            // Truyền theo dạng object { message, errors, messageCode, statusCode }
            this.message = messageOrParams.message;
            this.errors = messageOrParams.errors;
            this.messageCode = messageOrParams.messageCode;
            this.statusCode = messageOrParams.statusCode ?? 400;
        }
    }
}
