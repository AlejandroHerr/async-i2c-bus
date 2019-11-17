declare module 'i2c-bus' {
  export interface I2cFuncs {
    i2c: boolean;
    tenBitAddr: boolean;
    protocolMangling: boolean;
    smbusPec: boolean;
    smbusBlockProcCall: boolean;
    smbusQuick: boolean;
    smbusReceiveByte: boolean;
    smbusSendByte: boolean;
    smbusReadByte: boolean;
    smbusWriteByte: boolean;
    smbusReadWord: boolean;
    smbusWriteWord: boolean;
    smbusProcCall: boolean;
    smbusReadBlock: boolean;
    smbusWriteBlock: boolean;
    smbusReadI2cBlock: boolean;
    smbusWriteI2cBlock: boolean;
  }

  export interface I2cReadResponse {
    bytesRead: number;
    buffer: Buffer;
  }

  export interface I2cWriteResponse {
    bytesWritten: number;
    buffer: Buffer;
  }

  export interface PromisifiedBus {
    _busNumber: number;
    _forceAccess: boolean;

    close(): Promise<void>;
    i2cFuncs(): Promise<I2cFuncs>;

    readByte(address: number, command: number): Promise<number>;
    readWord(address: number, command: number): Promise<number>;
    readI2cBlock(address: number, command: number, length: number, buffer: Buffer): Promise<I2cReadResponse>;
    receiveByte(address: number): Promise<number>;

    sendByte(address: number, byte: number): Promise<void>;
    writeByte(address: number, command: number, byte: number): Promise<void>;
    writeWord(address: number, command: number, word: number): Promise<void>;
    writeQuick(address: number, bit: 0 | 1): Promise<void>;
    writeI2cBlock(address: number, command: number, length: number, buffer: Buffer): Promise<I2cWriteResponse>;

    i2cRead(address: number, length: number, buffer: Buffer): Promise<I2cReadResponse>;
    i2cWrite(address: number, length: number, buffer: Buffer): Promise<I2cWriteResponse>;

    scan(startAddress?: number, endAddress?: number): Promise<number[]>;
    deviceId(address: number): Promise<number>;
  }

  // eslint-disable-next-line import/prefer-default-export
  export function openPromisified(busNumber: number, options?: { forceAccess: boolean }): Promise<PromisifiedBus>;
}
