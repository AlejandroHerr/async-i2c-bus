import { PromisifiedBus, openPromisified } from 'i2c-bus';
import Bus from './Bus';
import BusError from './BusError';

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

describe('Bus', () => {
  describe('open', () => {
    it('should open the bus', async () => {
      const bus = new Bus({ busNumber: 1 });

      await bus.open();

      expect(bus.isOpen).toBeTruthy();

      await bus.open();

      expect(bus.isOpen).toBeTruthy();
    });
  });

  describe('close', () => {
    it("should call i2c-bus' close function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.close();

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.close as jest.MockedFunction<PromisifiedBus['close']>).toHaveBeenCalledTimes(1);
      expect(bus.isOpen).toBeFalsy();
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.close()).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('i2cFuncs', () => {
    it("should call i2c-bus' i2cFuncs function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.i2cFuncs();

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.i2cFuncs as jest.MockedFunction<PromisifiedBus['i2cFuncs']>).toHaveBeenCalledTimes(1);
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.i2cFuncs()).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('readByte', () => {
    const address = 0x1;
    const command = 0x2;
    it("should call i2c-bus' readByte function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.readByte(address, command);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readByte as jest.MockedFunction<PromisifiedBus['readByte']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readByte as jest.MockedFunction<PromisifiedBus['readByte']>).toHaveBeenCalledWith(address, command);
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.readByte(address, command)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('readWord', () => {
    const address = 0x1;
    const command = 0x2;
    it("should call i2c-bus' readWord function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.readWord(address, command);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readWord as jest.MockedFunction<PromisifiedBus['readWord']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.readWord as jest.MockedFunction<PromisifiedBus['readWord']>).toHaveBeenCalledWith(address, command);
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.readWord(address, command)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('readI2cBlock', () => {
    const address = 0x1;
    const command = 0x2;
    const length = 3;
    const buffer = Buffer.alloc(0);
    it("should call i2c-bus' readI2cBlock function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.readI2cBlock(address, command, length, buffer);

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

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.readI2cBlock(address, command, length, buffer)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('receiveByte', () => {
    const address = 0x1;
    it("should call i2c-bus' receiveByte function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.receiveByte(address);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.receiveByte as jest.MockedFunction<PromisifiedBus['receiveByte']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.receiveByte as jest.MockedFunction<PromisifiedBus['receiveByte']>).toHaveBeenCalledWith(address);
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.receiveByte(address)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('sendByte', () => {
    const address = 0x1;
    const byte = 0x2;
    it("should call i2c-bus' sendByte function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.sendByte(address, byte);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.sendByte as jest.MockedFunction<PromisifiedBus['sendByte']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.sendByte as jest.MockedFunction<PromisifiedBus['sendByte']>).toHaveBeenCalledWith(address, byte);
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.sendByte(address, byte)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('writeByte', () => {
    const address = 0x1;
    const command = 0x2;
    const byte = 0x3;
    it("should call i2c-bus' writeByte function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.writeByte(address, command, byte);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeByte as jest.MockedFunction<PromisifiedBus['writeByte']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeByte as jest.MockedFunction<PromisifiedBus['writeByte']>).toHaveBeenCalledWith(
        address,
        command,
        byte,
      );
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.writeByte(address, command, byte)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('writeWord', () => {
    const address = 0x1;
    const command = 0x2;
    const word = 0x3;
    it("should call i2c-bus' writeWord function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.writeWord(address, command, word);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeWord as jest.MockedFunction<PromisifiedBus['writeWord']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeWord as jest.MockedFunction<PromisifiedBus['writeWord']>).toHaveBeenCalledWith(
        address,
        command,
        word,
      );
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.writeWord(address, command, word)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('writeQuick', () => {
    const address = 0x1;
    const bit = 0x0;
    it("should call i2c-bus' writeQuick function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.writeQuick(address, bit);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeQuick as jest.MockedFunction<PromisifiedBus['writeQuick']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.writeQuick as jest.MockedFunction<PromisifiedBus['writeQuick']>).toHaveBeenCalledWith(address, bit);
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.writeQuick(address, bit)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('writeI2cBlock', () => {
    const address = 0x1;
    const command = 0x2;
    const length = 3;
    const buffer = Buffer.alloc(0);
    it("should call i2c-bus' writeI2cBlock function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.writeI2cBlock(address, command, length, buffer);

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
    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.writeI2cBlock(address, command, length, buffer)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('i2cRead', () => {
    const address = 0x1;
    const length = 3;
    const buffer = Buffer.alloc(0);
    it("should call i2c-bus' i2cRead function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.i2cRead(address, length, buffer);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.i2cRead as jest.MockedFunction<PromisifiedBus['i2cRead']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.i2cRead as jest.MockedFunction<PromisifiedBus['i2cRead']>).toHaveBeenCalledWith(
        address,
        length,
        buffer,
      );
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.i2cRead(address, length, buffer)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('i2cWrite', () => {
    const address = 0x1;
    const length = 3;
    const buffer = Buffer.alloc(0);
    it("should call i2c-bus' i2cWrite function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.i2cWrite(address, length, buffer);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.i2cWrite as jest.MockedFunction<PromisifiedBus['i2cWrite']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.i2cWrite as jest.MockedFunction<PromisifiedBus['i2cWrite']>).toHaveBeenCalledWith(
        address,

        length,
        buffer,
      );
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.i2cWrite(address, length, buffer)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('scan', () => {
    const startAddress = 0x1;
    const endAddress = 0x2;
    it("should call i2c-bus' scan function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.scan(startAddress, endAddress);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.scan as jest.MockedFunction<PromisifiedBus['scan']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.scan as jest.MockedFunction<PromisifiedBus['scan']>).toHaveBeenCalledWith(startAddress, endAddress);
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.scan(startAddress, endAddress)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('deviceId', () => {
    const address = 0x1;
    it("should call i2c-bus' deviceId function", async () => {
      const i2cBus = await openPromisified(1);
      const bus = await new Bus({ busNumber: 1 }).open();

      await bus.deviceId(address);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.deviceId as jest.MockedFunction<PromisifiedBus['deviceId']>).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(i2cBus.deviceId as jest.MockedFunction<PromisifiedBus['deviceId']>).toHaveBeenCalledWith(address);
    });

    it('should return a BusError if the bus is closed', () => {
      const bus = new Bus({ busNumber: 1 });

      expect(bus.deviceId(address)).rejects.toEqual(BusError.create('Bus is not open'));
    });
  });

  describe('static create', () => {
    it('should create a Bus instance', () => {
      const bus = Bus.create({ busNumber: 1 });

      expect(bus).toBeInstanceOf(Bus);
      expect(bus.busNumber).toEqual(1);
    });
  });

  describe('static createAndOpen', () => {
    it('should create a Bus instance', async () => {
      const bus = await Bus.createAndOpen({ busNumber: 1 });

      expect(bus).toBeInstanceOf(Bus);
      expect(bus.busNumber).toBe(1);
      expect(bus.isOpen).toBeTruthy();
    });
  });
});
