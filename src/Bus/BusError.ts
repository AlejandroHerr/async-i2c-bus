export default class BusError extends Error {
  public busNumber: number;

  constructor(msg: string, busNumber: number) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BusError);
    }

    this.busNumber = busNumber;
  }
}
