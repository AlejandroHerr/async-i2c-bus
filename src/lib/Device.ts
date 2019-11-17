import { I2cReadResponse, I2cWriteResponse } from 'i2c-bus';

import Bus from './Bus';

export default class Device {
  private bus!: Bus;

  readonly address: number;

  constructor({ bus, address }: { bus: Bus; address: number }) {
    this.bus = bus;
    this.address = address;
  }

  async readByte(command: number): Promise<number> {
    const result = await this.bus.readByte(this.address, command);

    return result;
  }

  async readWord(command: number): Promise<number> {
    const result = await this.bus.readWord(this.address, command);

    return result;
  }

  async readI2cBlock(command: number, length: number, buffer: Buffer): Promise<I2cReadResponse> {
    const result = await this.bus.readI2cBlock(this.address, command, length, buffer);

    return result;
  }

  async receiveByte(): Promise<number> {
    const result = await this.bus.receiveByte(this.address);

    return result;
  }

  async sendByte(byte: number): Promise<this> {
    await this.bus.sendByte(this.address, byte);

    return this;
  }

  async writeByte(command: number, byte: number): Promise<this> {
    await this.bus.writeByte(this.address, command, byte);

    return this;
  }

  async writeWord(command: number, word: number): Promise<this> {
    await this.bus.writeWord(this.address, command, word);

    return this;
  }

  async writeQuick(bit: 0 | 1): Promise<this> {
    await this.bus.writeQuick(this.address, bit);

    return this;
  }

  async writeI2cBlock(command: number, length: number, buffer: Buffer): Promise<I2cWriteResponse> {
    const result = await this.bus.writeI2cBlock(this.address, command, length, buffer);

    return result;
  }

  async i2cRead(length: number, buffer: Buffer): Promise<I2cReadResponse> {
    const result = await this.bus.i2cRead(this.address, length, buffer);

    return result;
  }

  async i2cWrite(length: number, buffer: Buffer): Promise<I2cWriteResponse> {
    const result = await this.bus.i2cWrite(this.address, length, buffer);

    return result;
  }

  async deviceId(): Promise<number> {
    const result = await this.bus.deviceId(this.address);

    return result;
  }

  static create({ bus, address }: { bus: Bus; address: number }): Device {
    return new Device({ bus, address });
  }
}
