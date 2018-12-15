export default class BusError extends Error {
  public busNumber: number;

  constructor(message: string, busNumber: number) {
    super(message);

    this.name = this.constructor.name;

    Error.captureStackTrace(this, BusError);

    this.busNumber = busNumber;
  }
}
