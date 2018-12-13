import { Bus } from '../Bus';

export interface Device {
  readonly address: number;
  readonly bus: Bus;

  i2cRead: (length: number, buffer: Buffer) => Promise<number>;
  i2cWrite: (length: number, buffer: Buffer) => Promise<number>;

  receiveByte: () => Promise<number>;
  sendByte: (byte: number) => Promise<void>;

  readByte: (command: number) => Promise<number>;
  readI2cBlock: (command: number, length: number, buffer: Buffer) => Promise<number>;
  readWord: (command: number) => Promise<number>;

  writeByte: (command: number, byte: number) => Promise<void>;
  writeWord: (command: number, word: number) => Promise<void>;
  writeI2cBlock: (command: number, length: number, buffer: Buffer) => Promise<number>;
}

const Device = ({ address, bus }: { address: number; bus: Bus }): Device => ({
  get address() {
    return address;
  },
  get bus() {
    return bus;
  },
  i2cRead(length: number, buffer: Buffer) {
    return bus.i2cRead(address, length, buffer);
  },
  i2cWrite(length: number, buffer: Buffer) {
    return bus.i2cWrite(address, length, buffer);
  },

  receiveByte() {
    return bus.receiveByte(address);
  },
  sendByte(byte: number) {
    return bus.sendByte(address, byte);
  },

  readByte(command: number) {
    return bus.readByte(address, command);
  },
  readWord(command: number) {
    return bus.readWord(address, command);
  },
  readI2cBlock(command: number, length: number, buffer: Buffer) {
    return bus.readI2cBlock(address, command, length, buffer);
  },

  writeByte(command: number, byte: number) {
    return bus.writeByte(address, command, byte);
  },
  writeWord(command: number, word: number) {
    return bus.writeWord(address, command, word);
  },
  writeI2cBlock(command: number, length: number, buffer: Buffer) {
    return bus.writeI2cBlock(address, command, length, buffer);
  },
});

export default Device;
