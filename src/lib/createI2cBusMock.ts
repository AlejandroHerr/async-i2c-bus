import { BufferCallback, CompletionCallback, I2cBus, I2cBusFuncs, open, ResultCallback } from 'i2c-bus';

const defaultI2cBusFuncs = {
  i2c: false,
  tenBitAddr: false,
  protocolMangling: false,
  smbusPec: false,
  smbusBlockProcCall: false,
  smbusQuick: false,
  smbusReceiveByte: false,
  smbusSendByte: false,
  smbusReadByte: false,
  smbusWriteByte: false,
  smbusReadWord: false,
  smbusWriteWord: false,
  smbusProcCall: false,
  smbusReadBlock: false,
  smbusWriteBlock: false,
  smbusReadI2cBlock: false,
  smbusWriteI2cBlock: false,
};

// @TODO Add full features
const createI2cBusMock = ({
  devices = {},
  i2cBusFuncs = defaultI2cBusFuncs,
}: {
  devices?: { [address: number]: Buffer };
  i2cBusFuncs?: I2cBusFuncs;
} = {}): typeof open => (_: number, openCallback: CompletionCallback): I2cBus => {
  openCallback(null);

  return {
    close(callback: CompletionCallback): void {
      callback(null);
    },
    closeSync() {
      return;
    },
    i2cFuncsSync() {
      return i2cBusFuncs;
    },
    i2cFuncs(callback: ResultCallback<I2cBusFuncs>) {
      callback(null, this.i2cFuncsSync());
    },
    scanSync() {
      return Object.keys(devices).map(address => parseInt(address, 10));
    },
    scan(callback: ResultCallback<number[]>) {
      callback(null, this.scanSync());
    },
    i2cReadSync(address: number, length: number, buffer: Buffer) {
      return devices[address].copy(buffer, 0, 0, length);
    },
    i2cRead(address: number, length: number, buffer: Buffer, callback: BufferCallback) {
      callback(null, this.i2cReadSync(address, length, buffer), buffer);
    },
    i2cWriteSync(address: number, length: number, buffer: Buffer) {
      return buffer.copy(devices[address], 0, 0, length);
    },
    i2cWrite(address: number, length: number, buffer: Buffer, callback: BufferCallback) {
      callback(null, this.i2cWriteSync(address, length, buffer), buffer);
    },
    readByteSync(address: number, command: number) {
      return devices[address][command];
    },
    readByte(address: number, command: number, callback: ResultCallback<number>) {
      callback(null, this.readByteSync(address, command));
    },
    readWordSync(address: number, command: number) {
      return devices[address].readUInt16BE(command);
    },
    readWord(address: number, command: number, callback: ResultCallback<number>) {
      return callback(null, this.readWordSync(address, command));
    },
    readI2cBlockSync(address: number, command: number, length: number, buffer: Buffer) {
      return devices[address].copy(buffer, 0, command, command + length);
    },
    readI2cBlock(address: number, command: number, length: number, buffer: Buffer, callback: BufferCallback) {
      callback(null, this.readI2cBlockSync(address, command, length, buffer), buffer);
    },
    receiveByteSync(address: number) {
      return this.readByteSync(address, 0);
    },
    receiveByte(address: number, callback: ResultCallback<number>) {
      callback(null, this.receiveByteSync(address));
    },
    writeByteSync(address: number, command: number, byte: number) {
      devices[address][command] = byte;
    },
    writeByte(address: number, command: number, byte: number, callback: CompletionCallback) {
      this.writeByteSync(address, command, byte);
      callback(null);
    },
    sendByteSync(address: number, byte: number) {
      this.writeByteSync(address, 0, byte);
    },
    sendByte(address: number, byte: number, callback: CompletionCallback) {
      this.sendByteSync(address, byte);
      callback(null);
    },
    writeWordSync(address: number, command: number, word: number) {
      devices[address].writeUInt16BE(word, command);
    },
    writeWord(address: number, command: number, word: number, callback: CompletionCallback) {
      this.writeByteSync(address, command, word);
      callback(null);
    },
    writeQuickSync() {
      return null;
    },
    writeQuick(__: number, ___: number, ____: number, callback: CompletionCallback) {
      callback(null);
    },
    writeI2cBlockSync(address: number, command: number, length: number, buffer: Buffer) {
      return buffer.copy(devices[address], command, 0, length);
    },
    writeI2cBlock(address: number, command: number, length: number, buffer: Buffer, callback: BufferCallback) {
      callback(null, this.writeI2cBlockSync(address, command, length, buffer), buffer);
    },
  };
};

export default createI2cBusMock;
