import BusInterface from './BusInterface';
import DeviceInterface from './DeviceInterface';

const Device = ({ address, bus }: { address: number; bus: BusInterface }): DeviceInterface => ({
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
