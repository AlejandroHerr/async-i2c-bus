export default class BusError extends Error {
  static create(message: string): BusError {
    const busError = new BusError(message);

    if (typeof Error.captureStackTrace === 'function') {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      Error.captureStackTrace(busError, BusError.create);
    } else {
      busError.stack = new Error(message).stack;
    }

    return busError;
  }

  static createFromError(error: Error): BusError {
    const busError = new BusError(error.message);

    busError.stack = error.stack;

    return busError;
  }
}
