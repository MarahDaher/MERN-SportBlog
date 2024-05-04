export class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message); // Pass the message to the base Error class
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  statusCode: number,
  message: string
): CustomError => {
  return new CustomError(message, statusCode);
};
