import { Bus } from '../Bus';
import Device from './Device';

jest.mock('i2c-bus', () => {
  const createI2cBusMock = require('../createI2cBusMock').default; // eslint-disable-line global-require

  return {
    open: createI2cBusMock({
      devices: {
        0xab: Buffer.allocUnsafe(0xff),
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
    it('should call promised async function', async () => {
      const busNumber = 1;
      const bus = Bus({ busNumber });
      const address = 0xab;
      const device = Device({ address, bus });

      await bus.open();

      const spyOnI2cRead = jest.spyOn(bus, 'i2cRead');
      await device.i2cRead(1, Buffer.from([]));
      expect(spyOnI2cRead).toHaveBeenCalledWith(address, 1, Buffer.from([]));

      const spyOnI2cWrite = jest.spyOn(bus, 'i2cWrite');
      await device.i2cWrite(1, Buffer.from([]));
      expect(spyOnI2cWrite).toHaveBeenCalledWith(address, 1, Buffer.from([]));

      const spyOnReceiveByte = jest.spyOn(bus, 'receiveByte');
      await device.receiveByte();
      expect(spyOnReceiveByte).toHaveBeenCalledWith(address);

      const spyOnSendByte = jest.spyOn(bus, 'sendByte');
      await device.sendByte(1);
      expect(spyOnSendByte).toHaveBeenCalledWith(address, 1);

      const spyOnReadByte = jest.spyOn(bus, 'readByte');
      await device.readByte(1);
      expect(spyOnReadByte).toHaveBeenCalledWith(address, 1);

      const spyOnReadWord = jest.spyOn(bus, 'readWord');
      await device.readWord(1);
      expect(spyOnReadWord).toHaveBeenCalledWith(address, 1);

      const spyOnReadI2cBlock = jest.spyOn(bus, 'readI2cBlock');
      await device.readI2cBlock(1, 2, Buffer.from([]));
      expect(spyOnReadI2cBlock).toHaveBeenCalledWith(address, 1, 2, Buffer.from([]));

      const spyOnWriteByte = jest.spyOn(bus, 'writeByte');
      await device.writeByte(1, 2);
      expect(spyOnWriteByte).toHaveBeenCalledWith(address, 1, 2);

      const spyOnWriteWord = jest.spyOn(bus, 'writeWord');
      await device.writeWord(1, 2);
      expect(spyOnWriteWord).toHaveBeenCalledWith(address, 1, 2);

      const spyOnWriteI2cBlock = jest.spyOn(bus, 'writeI2cBlock');
      await device.writeI2cBlock(1, 2, Buffer.from([]));
      expect(spyOnWriteI2cBlock).toHaveBeenCalledWith(address, 1, 2, Buffer.from([]));
    });
  });
});
