import { promisifyAll } from 'bluebird';
import { open as openI2cBus } from 'i2c-bus';

import BusError from './BusError';
import BusInterface from './BusInterface';
import { I2cBusPromised } from './types';

const Bus = ({ busNumber = 1, openBus = openI2cBus } = {}): BusInterface => {
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
        i2cBus = promisifyAll<I2cBusPromised>(openBus(this.busNumber, (error: Error) => {
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
        throw new BusError('Bus is not open', busNumber);
      }

      await i2cBus.closeAsync();

      isOpen = false;
      i2cBus = null;

      return this;
    },

    async i2cFuncs() {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.i2cFuncsAsync();
    },
    async scan() {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.scanAsync();
    },

    async i2cRead(address: number, length: number, buffer: Buffer) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.i2cReadAsync(address, length, buffer);
    },
    async i2cWrite(address: number, length: number, buffer: Buffer) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.i2cWriteAsync(address, length, buffer);
    },

    async receiveByte(address: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.receiveByteAsync(address);
    },
    async sendByte(address: number, byte: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.sendByteAsync(address, byte);
    },

    async readByte(address: number, command: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.readByteAsync(address, command);
    },
    async readWord(address: number, command: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.readWordAsync(address, command);
    },
    async readI2cBlock(address: number, command: number, length: number, buffer: Buffer) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.readI2cBlockAsync(address, command, length, buffer);
    },

    async writeByte(address: number, command: number, byte: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.writeByteAsync(address, command, byte);
    },
    async writeWord(address: number, command: number, word: number) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.writeWordAsync(address, command, word);
    },
    async writeI2cBlock(address: number, command: number, length: number, buffer: Buffer) {
      if (!i2cBus || !isOpen) {
        throw new BusError('Bus is not open', busNumber);
      }

      return i2cBus.writeI2cBlockAsync(address, command, length, buffer);
    },
  };
};

export default Bus;
