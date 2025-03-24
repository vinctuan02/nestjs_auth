export class SuccessRes<T> {
    message: string;
    messageCode?: string;
    data?: T;
    statusCode: number;

    constructor(message: string, data?: T, messageCode?: string, statusCode?: number);
    constructor(params: { message: string; data?: T; messageCode?: string; statusCode?: number });
    constructor(
        messageOrParams: string | { message: string; data?: T; messageCode?: string; statusCode?: number },
        data?: T,
        messageCode?: string,
        statusCode: number = 200
    ) {
        if (typeof messageOrParams === 'string') {
            // Truyền theo dạng (message, data, messageCode, statusCode)
            this.message = messageOrParams;
            this.data = data;
            this.messageCode = messageCode;
            this.statusCode = statusCode;
        } else {
            // Truyền theo dạng object { message, data, messageCode, statusCode }
            this.message = messageOrParams.message;
            this.data = messageOrParams.data;
            this.messageCode = messageOrParams.messageCode;
            this.statusCode = messageOrParams.statusCode ?? 200;
        }
    }
}
