import { I2cBusPromised } from '../types';
import Bus from './Bus';
import BusError from './BusError';

jest.mock('i2c-bus', () => {
  const createI2cBusMock = require('../createI2cBusMock').default; // eslint-disable-line global-require

  return {
    open: createI2cBusMock({
      devices: {
        0xc0: Buffer.allocUnsafe(0xff),
        0xff: Buffer.allocUnsafe(0xff),
        0xca: Buffer.allocUnsafe(0xff),
      },
    }),
  };
});

describe('Bus', () => {
  describe('open', () => {
    it('should open the bus', async () => {
      const bus = Bus({ busNumber: 1 });

      await bus.open();

      expect(bus.isOpen).toBeTruthy();
      expect(bus.i2cBus).not.toBeNull();
    });
  });
  describe('open', () => {
    it('should open the bus', async () => {
      const bus = Bus({ busNumber: 1 });

      await bus.open();
      await bus.close();

      expect(bus.isOpen).toBeFalsy();
      expect(bus.i2cBus).toBeNull();
    });
  });
  describe('methods', () => {
    it('should throw a Bus error when the bus is not open', () => {
      const busNumber = 1;
      const bus = Bus({ busNumber });

      expect(bus.i2cFuncs()).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.scan()).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.i2cRead(0, 1, Buffer.from([]))).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.i2cWrite(0, 1, Buffer.from([]))).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.receiveByte(0)).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.sendByte(0, 0)).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.readByte(0, 0)).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.readWord(0, 0)).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.readI2cBlock(0, 0, 1, Buffer.from([]))).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.writeByte(0, 0, 1)).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.writeWord(0, 0, 1)).rejects.toThrow(new BusError('Bus is not open', busNumber));
      expect(bus.writeI2cBlock(0, 0, 1, Buffer.from([]))).rejects.toThrow(new BusError('Bus is not open', busNumber));

      expect(bus.close()).rejects.toThrow(new BusError('Bus is not open', busNumber));
    });
    it('should call promised async function', async () => {
      const busNumber = 1;
      const bus = Bus({ busNumber });

      await bus.open();

      const { i2cBus } = bus;

      (i2cBus as I2cBusPromised).i2cFuncsAsync = jest.fn();
      await bus.i2cFuncs();
      expect((i2cBus as I2cBusPromised).i2cFuncsAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).scanAsync = jest.fn();
      await bus.scan();
      expect((i2cBus as I2cBusPromised).scanAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).i2cReadAsync = jest.fn();
      await bus.i2cRead(0, 1, Buffer.from([]));
      expect((i2cBus as I2cBusPromised).i2cReadAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).i2cWriteAsync = jest.fn();
      await bus.i2cWrite(0, 1, Buffer.from([]));
      expect((i2cBus as I2cBusPromised).i2cWriteAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).receiveByteAsync = jest.fn();
      await bus.receiveByte(0);
      expect((i2cBus as I2cBusPromised).receiveByteAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).sendByteAsync = jest.fn();
      await bus.sendByte(0, 0);
      expect((i2cBus as I2cBusPromised).sendByteAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).readByteAsync = jest.fn();
      await bus.readByte(0, 0);
      expect((i2cBus as I2cBusPromised).readByteAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).readWordAsync = jest.fn();
      await bus.readWord(0, 0);
      expect((i2cBus as I2cBusPromised).readWordAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).readI2cBlockAsync = jest.fn();
      await bus.readI2cBlock(0, 0, 1, Buffer.from([]));
      expect((i2cBus as I2cBusPromised).readI2cBlockAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).writeByteAsync = jest.fn();
      await bus.writeByte(0, 0, 1);
      expect((i2cBus as I2cBusPromised).writeByteAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).writeWordAsync = jest.fn();
      await bus.writeWord(0, 0, 1);
      expect((i2cBus as I2cBusPromised).writeWordAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).writeI2cBlockAsync = jest.fn();
      await bus.writeI2cBlock(0, 0, 1, Buffer.from([]));
      expect((i2cBus as I2cBusPromised).writeI2cBlockAsync).toHaveBeenCalled();

      (i2cBus as I2cBusPromised).closeAsync = jest.fn();
      await bus.close();
      expect((i2cBus as I2cBusPromised).closeAsync).toHaveBeenCalled();
    });
  });
});
