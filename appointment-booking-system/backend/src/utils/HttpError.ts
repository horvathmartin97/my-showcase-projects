export default class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message = "Internal server Error") {
    super(message);
    this.statusCode = statusCode;
  }
}
