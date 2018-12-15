export default class DeviceError extends Error {
  public busNumber: number;
  public deviceAddress: number;

  constructor(message: string, busNumber: number, deviceAddress: number) {
    super(message);

    this.name = this.constructor.name;

    Error.captureStackTrace(this, DeviceError);

    this.busNumber = busNumber;
    this.deviceAddress = deviceAddress;
  }
}
