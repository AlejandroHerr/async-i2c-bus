import { I2cBus, I2cBusFuncs } from 'i2c-bus';

/* tslint:disable-next-line:interface-name */
export interface I2cBusPromised extends I2cBus {
  closeAsync(): Promise<void>;

  i2cFuncsAsync(): Promise<I2cBusFuncs>;
  scanAsync(): Promise<number[]>;

  i2cReadAsync(address: number, length: number, buffer: Buffer): Promise<number>;
  i2cWriteAsync(address: number, length: number, buffer: Buffer): Promise<number>;

  receiveByteAsync(address: number): Promise<number>;
  sendByteAsync(address: number, byte: number): Promise<void>;

  readByteAsync(address: number, command: number): Promise<number>;
  readWordAsync(address: number, command: number): Promise<number>;
  readI2cBlockAsync(address: number, command: number, length: number, buffer: Buffer): Promise<number>;

  writeByteAsync(address: number, command: number, byte: number): Promise<void>;
  writeWordAsync(address: number, command: number, word: number): Promise<void>;
  writeI2cBlockAsync(address: number, command: number, length: number, buffer: Buffer): Promise<number>;
}
