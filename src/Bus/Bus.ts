import { promisifyAll } from 'bluebird';
import { I2cBusFuncs, open as openI2cBusFn } from 'i2c-bus';

import { I2cBusPromised } from '../types';

import BusError from './BusError';

export interface BusInterface {
  readonly busNumber: number;
  readonly i2cBus: I2cBusPromised | null;
  readonly isOpen: boolean;

  open: () => Promise<BusInterface>;
  close: () => Promise<BusInterface>;

  i2cFuncs: () => Promise<I2cBusFuncs>;
  scan: () => Promise<number[]>;

  i2cRead: (address: number, length: number, buffer: Buffer) => Promise<number>;
  i2cWrite: (address: number, length: number, buffer: Buffer) => Promise<number>;

  receiveByte: (address: number) => Promise<number>;
  sendByte: (address: number, byte: number) => Promise<void>;

  readByte: (address: number, command: number) => Promise<number>;
  readI2cBlock: (address: number, command: number, length: number, buffer: Buffer) => Promise<number>;
  readWord: (address: number, command: number) => Promise<number>;

  writeByte: (address: number, command: number, byte: number) => Promise<void>;
  writeWord: (address: number, command: number, word: number) => Promise<void>;
  writeI2cBlock: (address: number, command: number, length: number, buffer: Buffer) => Promise<number>;
}

export default ({ busNumber = 1, openI2cBus = openI2cBusFn } = {}): BusInterface => {
  let i2cBus: I2cBusPromised | null = null;
  let isOpen: boolean = false;

  return {
    get busNumber() {
      return busNumber;
    },
    get i2cBus() {
      return i2cBus;
    },
    get isOpen() {
      return isOpen;
    },

    open() {
      return new Promise((resolve, reject) => {
        i2cBus = promisifyAll<I2cBusPromised>(openI2cBus(this.busNumber, (error: Error) => {
          if (error) {
            reject(`Error opening i2c bus: ${error.message}`);
          }

          isOpen = true;

          resolve(this);
        }) as I2cBusPromised);
      });
    },
    async close() {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      await i2cBus.closeAsync();

      isOpen = false;
      i2cBus = null;

      return this;
    },

    async i2cFuncs() {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.i2cFuncsAsync();
    },
    async scan() {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.scanAsync();
    },

    async i2cRead(address: number, length: number, buffer: Buffer) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.i2cReadAsync(address, length, buffer);
    },
    async i2cWrite(address: number, length: number, buffer: Buffer) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.i2cWriteAsync(address, length, buffer);
    },

    async receiveByte(address: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.receiveByteAsync(address);
    },
    async sendByte(address: number, byte: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.sendByteAsync(address, byte);
    },

    async readByte(address: number, command: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.readByteAsync(address, command);
    },
    async readWord(address: number, command: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.readWordAsync(address, command);
    },
    async readI2cBlock(address: number, command: number, length: number, buffer: Buffer) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.readI2cBlockAsync(address, command, length, buffer);
    },

    async writeByte(address: number, command: number, byte: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.writeByteAsync(address, command, byte);
    },
    async writeWord(address: number, command: number, word: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.writeWordAsync(address, command, word);
    },
    async writeI2cBlock(address: number, command: number, length: number, buffer: Buffer) {
      if (!i2cBus || !isOpen) {
        throw new BusError('BusInterface is not open', busNumber);
      }

      return i2cBus.writeI2cBlockAsync(address, command, length, buffer);
    },
  };
};
