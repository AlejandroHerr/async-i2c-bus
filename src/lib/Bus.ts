import { openPromisified, PromisifiedBus, I2cFuncs, I2cReadResponse, I2cWriteResponse } from 'i2c-bus';

import BusError from './BusError';

export default class Bus {
  private i2cBus!: PromisifiedBus;

  readonly busNumber: number;

  isOpen = false;

  constructor({ busNumber }: { busNumber: number }) {
    this.busNumber = busNumber;
  }

  private guardAgainstClosedBus(): void {
    if (!this.isOpen) {
      throw BusError.create('Bus is not open');
    }
  }

  async open(): Promise<this> {
    try {
      if (!this.isOpen) {
        this.i2cBus = await openPromisified(this.busNumber);
        this.isOpen = true;
      }

      return this;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async close(): Promise<this> {
    this.guardAgainstClosedBus();

    try {
      await this.i2cBus.close();

      this.isOpen = false;

      return this;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async i2cFuncs(): Promise<I2cFuncs> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.i2cFuncs();

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async readByte(address: number, command: number): Promise<number> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.readByte(address, command);

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async readWord(address: number, command: number): Promise<number> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.readWord(address, command);

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async readI2cBlock(address: number, command: number, length: number, buffer: Buffer): Promise<I2cReadResponse> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.readI2cBlock(address, command, length, buffer);

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async receiveByte(address: number): Promise<number> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.receiveByte(address);

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async sendByte(address: number, byte: number): Promise<this> {
    this.guardAgainstClosedBus();

    try {
      await this.i2cBus.sendByte(address, byte);

      return this;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async writeByte(address: number, command: number, byte: number): Promise<this> {
    this.guardAgainstClosedBus();

    try {
      await this.i2cBus.writeByte(address, command, byte);

      return this;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async writeWord(address: number, command: number, word: number): Promise<this> {
    this.guardAgainstClosedBus();

    try {
      await this.i2cBus.writeWord(address, command, word);

      return this;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async writeQuick(address: number, bit: 0 | 1): Promise<this> {
    this.guardAgainstClosedBus();

    try {
      await this.i2cBus.writeQuick(address, bit);

      return this;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async writeI2cBlock(address: number, command: number, length: number, buffer: Buffer): Promise<I2cWriteResponse> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.writeI2cBlock(address, command, length, buffer);

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async i2cRead(address: number, length: number, buffer: Buffer): Promise<I2cReadResponse> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.i2cRead(address, length, buffer);

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async i2cWrite(address: number, length: number, buffer: Buffer): Promise<I2cWriteResponse> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.i2cWrite(address, length, buffer);

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async scan(startAddress?: number, endAddress?: number): Promise<number[]> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.scan(startAddress, endAddress);

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  async deviceId(address: number): Promise<number> {
    this.guardAgainstClosedBus();

    try {
      const result = await this.i2cBus.deviceId(address);

      return result;
    } catch (error) {
      throw BusError.createFromError(error);
    }
  }

  static create({ busNumber }: { busNumber: number }): Bus {
    return new Bus({ busNumber });
  }

  static createAndOpen({ busNumber }: { busNumber: number }): Promise<Bus> {
    const bus = new Bus({ busNumber });

    return bus.open();
  }
}
