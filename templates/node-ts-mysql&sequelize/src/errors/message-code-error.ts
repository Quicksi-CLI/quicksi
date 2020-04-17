export class MessageCodeError extends Error {

    constructor(public message: string, public statusCode: number) {
        super();
    }
}