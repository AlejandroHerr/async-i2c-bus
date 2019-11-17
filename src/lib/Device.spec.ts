import { PromisifiedBus, openPromisified } from 'i2c-bus';

import Bus from './Bus';
import Device from './Device';

jest.mock('i2c-bus', () => {
  const promisifiedBus = ({
    close: jest.fn(),
    i2cFuncs: jest.fn(),
    readByte: jest.fn(),
    readWord: jest.fn(),
    readI2cBlock: jest.fn(),
    receiveByte: jest.fn(),
    sendByte: jest.fn(),
    writeByte: jest.fn(),
    writeWord: jest.fn(),
    writeQuick: jest.fn(),
    writeI2cBlock: jest.fn(),
    i2cRead: jest.fn(),
    i2cWrite: jest.fn(),
    scan: jest.fn(),
    deviceId: jest.fn(),
  } as unknown) as PromisifiedBus;

  return { openPromisified: (): PromisifiedBus => promisifiedBus };
});

const setup = async (): Promise<{
  busNumber: number;
  address: number;
  i2cBus: PromisifiedBus;
  bus: Bus;
  device: Device;
}> => {
  const busNumber = 1;
  const address = 0xff;

  const i2cBus = await openPromisified(busNumber);
  const bus = await Bus.createAndOpen({ busNumber });
  const device = Device.create({ bus, address });

  return { busNumber, address, i2cBus, bus, device };
};

describe('Bus', () => {
  describe('readByte', () => {
    const command = 0x2;
    it("should call i2c-bus' readByte function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.readByte(command);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readByte as jest.MockedFunction<PromisifiedBus['readByte']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readByte as jest.MockedFunction<PromisifiedBus['readByte']>).toHaveBeenCalledWith(address, command);
    });
  });

  describe('readWord', () => {
    const command = 0x2;
    it("should call i2c-bus' readWord function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.readWord(command);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readWord as jest.MockedFunction<PromisifiedBus['readWord']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readWord as jest.MockedFunction<PromisifiedBus['readWord']>).toHaveBeenCalledWith(address, command);
    });
  });

  describe('readI2cBlock', () => {
    const command = 0x2;
    const length = 3;
    const buffer = Buffer.alloc(0);
    it("should call i2c-bus' readI2cBlock function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.readI2cBlock(command, length, buffer);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readI2cBlock as jest.MockedFunction<PromisifiedBus['readI2cBlock']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readI2cBlock as jest.MockedFunction<PromisifiedBus['readI2cBlock']>).toHaveBeenCalledWith(
        address,
        command,
        length,
        buffer,
      );
    });
  });

  describe('receiveByte', () => {
    it("should call i2c-bus' receiveByte function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.receiveByte();

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.receiveByte as jest.MockedFunction<PromisifiedBus['receiveByte']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.receiveByte as jest.MockedFunction<PromisifiedBus['receiveByte']>).toHaveBeenCalledWith(address);
    });
  });

  describe('sendByte', () => {
    const byte = 0x2;
    it("should call i2c-bus' sendByte function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.sendByte(byte);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.sendByte as jest.MockedFunction<PromisifiedBus['sendByte']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.sendByte as jest.MockedFunction<PromisifiedBus['sendByte']>).toHaveBeenCalledWith(address, byte);
    });
  });

  describe('writeByte', () => {
    const command = 0x2;
    const byte = 0x3;
    it("should call i2c-bus' writeByte function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.writeByte(command, byte);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeByte as jest.MockedFunction<PromisifiedBus['writeByte']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeByte as jest.MockedFunction<PromisifiedBus['writeByte']>).toHaveBeenCalledWith(
        address,
        command,
        byte,
      );
    });
  });

  describe('writeWord', () => {
    const command = 0x2;
    const word = 0x3;
    it("should call i2c-bus' writeWord function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.writeWord(command, word);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeWord as jest.MockedFunction<PromisifiedBus['writeWord']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeWord as jest.MockedFunction<PromisifiedBus['writeWord']>).toHaveBeenCalledWith(
        address,
        command,
        word,
      );
    });
  });

  describe('writeQuick', () => {
    const bit = 0x0;
    it("should call i2c-bus' writeQuick function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.writeQuick(bit);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeQuick as jest.MockedFunction<PromisifiedBus['writeQuick']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeQuick as jest.MockedFunction<PromisifiedBus['writeQuick']>).toHaveBeenCalledWith(address, bit);
    });
  });

  describe('writeI2cBlock', () => {
    const command = 0x2;
    const length = 3;
    const buffer = Buffer.alloc(0);
    it("should call i2c-bus' writeI2cBlock function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.writeI2cBlock(command, length, buffer);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeI2cBlock as jest.MockedFunction<PromisifiedBus['writeI2cBlock']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeI2cBlock as jest.MockedFunction<PromisifiedBus['writeI2cBlock']>).toHaveBeenCalledWith(
        address,
        command,
        length,
        buffer,
      );
    });
  });

  describe('i2cRead', () => {
    const length = 3;
    const buffer = Buffer.alloc(0);
    it("should call i2c-bus' i2cRead function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.i2cRead(length, buffer);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.i2cRead as jest.MockedFunction<PromisifiedBus['i2cRead']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.i2cRead as jest.MockedFunction<PromisifiedBus['i2cRead']>).toHaveBeenCalledWith(
        address,
        length,
        buffer,
      );
    });
  });

  describe('i2cWrite', () => {
    const length = 3;
    const buffer = Buffer.alloc(0);
    it("should call i2c-bus' i2cWrite function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.i2cWrite(length, buffer);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.i2cWrite as jest.MockedFunction<PromisifiedBus['i2cWrite']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.i2cWrite as jest.MockedFunction<PromisifiedBus['i2cWrite']>).toHaveBeenCalledWith(
        address,
        length,
        buffer,
      );
    });
  });

  describe('deviceId', () => {
    it("should call i2c-bus' deviceId function through the bus", async () => {
      const { address, i2cBus, device } = await setup();

      await device.deviceId();

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.deviceId as jest.MockedFunction<PromisifiedBus['deviceId']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.deviceId as jest.MockedFunction<PromisifiedBus['deviceId']>).toHaveBeenCalledWith(address);
    });
  });

  describe('static create', () => {
    it('should create a Device instance', () => {
      const bus = Bus.create({ busNumber: 1 });
      const device = Device.create({ bus, address: 0x7f });

      expect(device).toBeInstanceOf(Device);
      expect(device).toHaveProperty('bus', bus);
      expect(device.address).toBe(0x7f);
    });
  });
});
