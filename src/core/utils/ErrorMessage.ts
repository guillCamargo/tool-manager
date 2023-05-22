export default class ErrorMessage {
    code: number;
    message: string;
    private error: string;

    constructor(code: number, message: string) {
        this.code = code;
        this.message = message;
        this.error = this.getErrorByCode(code);
    }

    getErrorByCode(code: number): string {

        const errorCodes = [{
            code: 500,
            error: 'Internal Server Error'
        }, {
            code: 400,
            error: 'Bad Request'
        }, {
            code: 401,
            error: 'Unauthorized'
        }]

        return errorCodes.find(ec => ec.code === code).error;
    }
}