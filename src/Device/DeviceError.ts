export default class DeviceError extends Error {
  public busNumber: number;
  public deviceAddress: number;

  constructor(msg: string, busNumber: number, deviceAddress: number) {
    super(msg);

    Error.captureStackTrace(this, DeviceError);

    this.busNumber = busNumber;
    this.deviceAddress = deviceAddress;
  }
}
