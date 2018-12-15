import { I2cBusFuncs } from 'i2c-bus';

import { I2cBusPromised } from '../types';

export default interface BusInterface {
  readonly busNumber: number;
  readonly i2cBus: I2cBusPromised | null;
  readonly isOpen: boolean;

  open(): Promise<BusInterface>;
  close(): Promise<BusInterface>;

  i2cFuncs(): Promise<I2cBusFuncs>;
  scan(): Promise<number[]>;

  i2cRead(address: number, length: number, buffer: Buffer): Promise<number>;
  i2cWrite(address: number, length: number, buffer: Buffer): Promise<number>;

  receiveByte(address: number): Promise<number>;
  sendByte(address: number, byte: number): Promise<void>;

  readByte(address: number, command: number): Promise<number>;
  readI2cBlock(address: number, command: number, length: number, buffer: Buffer): Promise<number>;
  readWord(address: number, command: number): Promise<number>;

  writeByte(address: number, command: number, byte: number): Promise<void>;
  writeWord(address: number, command: number, word: number): Promise<void>;
  writeI2cBlock(address: number, command: number, length: number, buffer: Buffer): Promise<number>;
}
