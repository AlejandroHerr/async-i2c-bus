import BusInterface from '../Bus/BusInterface';

export default interface DeviceInterface {
  readonly address: number;
  readonly bus: BusInterface;

  i2cRead(length: number, buffer: Buffer): Promise<number>;
  i2cWrite(length: number, buffer: Buffer): Promise<number>;

  receiveByte(): Promise<number>;
  sendByte(byte: number): Promise<void>;

  readByte(command: number): Promise<number>;
  readI2cBlock(command: number, length: number, buffer: Buffer): Promise<number>;
  readWord(command: number): Promise<number>;

  writeByte(command: number, byte: number): Promise<void>;
  writeWord(command: number, word: number): Promise<void>;
  writeI2cBlock(command: number, length: number, buffer: Buffer): Promise<number>;
}
