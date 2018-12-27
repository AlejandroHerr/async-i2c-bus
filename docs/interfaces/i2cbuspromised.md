[async-i2c-bus](../README.md) > [I2cBusPromised](../interfaces/i2cbuspromised.md)

# Interface: I2cBusPromised

## Hierarchy

 `I2cBus`

**↳ I2cBusPromised**

## Index

### Methods

* [close](i2cbuspromised.md#close)
* [closeAsync](i2cbuspromised.md#closeasync)
* [closeSync](i2cbuspromised.md#closesync)
* [i2cFuncs](i2cbuspromised.md#i2cfuncs)
* [i2cFuncsAsync](i2cbuspromised.md#i2cfuncsasync)
* [i2cFuncsSync](i2cbuspromised.md#i2cfuncssync)
* [i2cRead](i2cbuspromised.md#i2cread)
* [i2cReadAsync](i2cbuspromised.md#i2creadasync)
* [i2cReadSync](i2cbuspromised.md#i2creadsync)
* [i2cWrite](i2cbuspromised.md#i2cwrite)
* [i2cWriteAsync](i2cbuspromised.md#i2cwriteasync)
* [i2cWriteSync](i2cbuspromised.md#i2cwritesync)
* [readByte](i2cbuspromised.md#readbyte)
* [readByteAsync](i2cbuspromised.md#readbyteasync)
* [readByteSync](i2cbuspromised.md#readbytesync)
* [readI2cBlock](i2cbuspromised.md#readi2cblock)
* [readI2cBlockAsync](i2cbuspromised.md#readi2cblockasync)
* [readI2cBlockSync](i2cbuspromised.md#readi2cblocksync)
* [readWord](i2cbuspromised.md#readword)
* [readWordAsync](i2cbuspromised.md#readwordasync)
* [readWordSync](i2cbuspromised.md#readwordsync)
* [receiveByte](i2cbuspromised.md#receivebyte)
* [receiveByteAsync](i2cbuspromised.md#receivebyteasync)
* [receiveByteSync](i2cbuspromised.md#receivebytesync)
* [scan](i2cbuspromised.md#scan)
* [scanAsync](i2cbuspromised.md#scanasync)
* [scanSync](i2cbuspromised.md#scansync)
* [sendByte](i2cbuspromised.md#sendbyte)
* [sendByteAsync](i2cbuspromised.md#sendbyteasync)
* [sendByteSync](i2cbuspromised.md#sendbytesync)
* [writeByte](i2cbuspromised.md#writebyte)
* [writeByteAsync](i2cbuspromised.md#writebyteasync)
* [writeByteSync](i2cbuspromised.md#writebytesync)
* [writeI2cBlock](i2cbuspromised.md#writei2cblock)
* [writeI2cBlockAsync](i2cbuspromised.md#writei2cblockasync)
* [writeI2cBlockSync](i2cbuspromised.md#writei2cblocksync)
* [writeQuick](i2cbuspromised.md#writequick)
* [writeQuickSync](i2cbuspromised.md#writequicksync)
* [writeWord](i2cbuspromised.md#writeword)
* [writeWordAsync](i2cbuspromised.md#writewordasync)
* [writeWordSync](i2cbuspromised.md#writewordsync)

---

## Methods

<a id="close"></a>

###  close

▸ **close**(callback: *`CompletionCallback`*): `void`

*Inherited from I2cBus.close*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:44*

Asynchronous close.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | `CompletionCallback` |  ```Completion callback``` |

**Returns:** `void`

___
<a id="closeasync"></a>

###  closeAsync

▸ **closeAsync**(): `Promise`<`void`>

*Defined in [lib/types.ts:5](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L5)*

**Returns:** `Promise`<`void`>

___
<a id="closesync"></a>

###  closeSync

▸ **closeSync**(): `void`

*Inherited from I2cBus.closeSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:49*

Synchronous close.

**Returns:** `void`

___
<a id="i2cfuncs"></a>

###  i2cFuncs

▸ **i2cFuncs**(callback: *`ResultCallback`<`I2cBusFuncs`>*): `void`

*Inherited from I2cBus.i2cFuncs*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:57*

Determine functionality of the bus/adapter asynchronously.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | `ResultCallback`<`I2cBusFuncs`> |  ```Callback that will recieve a frozen I2cFuncs object describing the I2C functionality available.``` |

**Returns:** `void`

___
<a id="i2cfuncsasync"></a>

###  i2cFuncsAsync

▸ **i2cFuncsAsync**(): `Promise`<`I2cBusFuncs`>

*Defined in [lib/types.ts:7](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L7)*

**Returns:** `Promise`<`I2cBusFuncs`>

___
<a id="i2cfuncssync"></a>

###  i2cFuncsSync

▸ **i2cFuncsSync**(): `I2cBusFuncs`

*Inherited from I2cBus.i2cFuncsSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:65*

Determine functionality of the bus/adapter synchronously.

**Returns:** `I2cBusFuncs`

    A frozen I2cFuncs object describing the I2C functionality available.

___
<a id="i2cread"></a>

###  i2cRead

▸ **i2cRead**(address: *`number`*, length: *`number`*, buffer: *`Buffer`*, callback: *`BufferCallback`*): `void`

*Inherited from I2cBus.i2cRead*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:95*

Asynchronous plain I2C read.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| length | `number` |  ```The number of bytes to read.``` |
| buffer | `Buffer` |  ```The buffer that the data will be written to (must be at least {length} bytes long).``` |
| callback | `BufferCallback` |  ```Callback that will recieve the number of bytes read and the given buffer.``` |

**Returns:** `void`

___
<a id="i2creadasync"></a>

###  i2cReadAsync

▸ **i2cReadAsync**(address: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/types.ts:10](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="i2creadsync"></a>

###  i2cReadSync

▸ **i2cReadSync**(address: *`number`*, length: *`number`*, buffer: *`Buffer`*): `number`

*Inherited from I2cBus.i2cReadSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:109*

Synchronous plain I2C read.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| length | `number` |  ```The number of bytes to read.``` |
| buffer | `Buffer` |  ```The buffer that the data will be written to (must be at least {length} bytes long).``` |

**Returns:** `number`

    The number of bytes read.

___
<a id="i2cwrite"></a>

###  i2cWrite

▸ **i2cWrite**(address: *`number`*, length: *`number`*, buffer: *`Buffer`*, callback: *`BufferCallback`*): `void`

*Inherited from I2cBus.i2cWrite*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:123*

Asynchronous plain I2C write.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| length | `number` |  ```The number of bytes to write.``` |
| buffer | `Buffer` |  ```The buffer that the data to write (must contain at least {length} bytes).``` |
| callback | `BufferCallback` |  ```Callback that will recieve the number of bytes written and the given buffer.``` |

**Returns:** `void`

___
<a id="i2cwriteasync"></a>

###  i2cWriteAsync

▸ **i2cWriteAsync**(address: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/types.ts:11](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="i2cwritesync"></a>

###  i2cWriteSync

▸ **i2cWriteSync**(address: *`number`*, length: *`number`*, buffer: *`Buffer`*): `number`

*Inherited from I2cBus.i2cWriteSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:137*

Synchronous plain I2C write.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| length | `number` |  ```The number of bytes to write.``` |
| buffer | `Buffer` |  ```The buffer that the data will to write (must contain at least {length} bytes).``` |

**Returns:** `number`

    The number of bytes written.

___
<a id="readbyte"></a>

###  readByte

▸ **readByte**(address: *`number`*, command: *`number`*, callback: *`ResultCallback`<`number`>*): `void`

*Inherited from I2cBus.readByte*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:149*

Asynchronous SMBus read byte.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| callback | `ResultCallback`<`number`> |  ```Callback that will recieve the byte read.``` |

**Returns:** `void`

___
<a id="readbyteasync"></a>

###  readByteAsync

▸ **readByteAsync**(address: *`number`*, command: *`number`*): `Promise`<`number`>

*Defined in [lib/types.ts:16](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |

**Returns:** `Promise`<`number`>

___
<a id="readbytesync"></a>

###  readByteSync

▸ **readByteSync**(address: *`number`*, command: *`number`*): `number`

*Inherited from I2cBus.readByteSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:161*

Synchronous SMBus read byte.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |

**Returns:** `number`

    The byte read.

___
<a id="readi2cblock"></a>

###  readI2cBlock

▸ **readI2cBlock**(address: *`number`*, command: *`number`*, length: *`number`*, buffer: *`Buffer`*, callback: *`BufferCallback`*): `void`

*Inherited from I2cBus.readI2cBlock*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:203*

Asynchronous I2C block read (not defined by the SMBus specification). Reads a block of bytes from a device, from a designated register that is specified by cmd.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| length | `number` |  ```The number of bytes to read (max 32).``` |
| buffer | `Buffer` |  ```The buffer that the data will be written to (must be at least {length} bytes long).``` |
| callback | `BufferCallback` |  ```Callback that will recieve the number of bytes read and the given buffer.``` |

**Returns:** `void`

___
<a id="readi2cblockasync"></a>

###  readI2cBlockAsync

▸ **readI2cBlockAsync**(address: *`number`*, command: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/types.ts:18](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="readi2cblocksync"></a>

###  readI2cBlockSync

▸ **readI2cBlockSync**(address: *`number`*, command: *`number`*, length: *`number`*, buffer: *`Buffer`*): `number`

*Inherited from I2cBus.readI2cBlockSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:221*

Synchronous I2C block read (not defined by the SMBus specification). Reads a block of bytes from a device, from a designated register that is specified by cmd.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| length | `number` |  ```The number of bytes to read (max 32).``` |
| buffer | `Buffer` |  ```The buffer that the data will be written to (must be at least {length} bytes long).``` |

**Returns:** `number`

    The number of bytes read.

___
<a id="readword"></a>

###  readWord

▸ **readWord**(address: *`number`*, command: *`number`*, callback: *`ResultCallback`<`number`>*): `void`

*Inherited from I2cBus.readWord*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:173*

Asynchronous SMBus read word.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| callback | `ResultCallback`<`number`> |  ```Callback that will recieve the word read.``` |

**Returns:** `void`

___
<a id="readwordasync"></a>

###  readWordAsync

▸ **readWordAsync**(address: *`number`*, command: *`number`*): `Promise`<`number`>

*Defined in [lib/types.ts:17](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |

**Returns:** `Promise`<`number`>

___
<a id="readwordsync"></a>

###  readWordSync

▸ **readWordSync**(address: *`number`*, command: *`number`*): `number`

*Inherited from I2cBus.readWordSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:185*

Synchronous SMBus read word.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |

**Returns:** `number`

    The word read.

___
<a id="receivebyte"></a>

###  receiveByte

▸ **receiveByte**(address: *`number`*, callback: *`ResultCallback`<`number`>*): `void`

*Inherited from I2cBus.receiveByte*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:231*

Asynchronous SMBus receive byte.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| callback | `ResultCallback`<`number`> |  ```Callback that will recieve the byte received.``` |

**Returns:** `void`

___
<a id="receivebyteasync"></a>

###  receiveByteAsync

▸ **receiveByteAsync**(address: *`number`*): `Promise`<`number`>

*Defined in [lib/types.ts:13](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |

**Returns:** `Promise`<`number`>

___
<a id="receivebytesync"></a>

###  receiveByteSync

▸ **receiveByteSync**(address: *`number`*): `number`

*Inherited from I2cBus.receiveByteSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:241*

Synchronous SMBus receive byte.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |

**Returns:** `number`

    The byte received.

___
<a id="scan"></a>

###  scan

▸ **scan**(callback: *`ResultCallback`<`number`[]>*): `void`

*Inherited from I2cBus.scan*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:73*

Scans the I2C bus asynchronously for devices the same way `i2cdetect -y -r` would.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | `ResultCallback`<`number`[]> |  ```Callback that will recieve an array of numbers where each number represents the I2C address of a device which was detected.``` |

**Returns:** `void`

___
<a id="scanasync"></a>

###  scanAsync

▸ **scanAsync**(): `Promise`<`number`[]>

*Defined in [lib/types.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L8)*

**Returns:** `Promise`<`number`[]>

___
<a id="scansync"></a>

###  scanSync

▸ **scanSync**(): `number`[]

*Inherited from I2cBus.scanSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:81*

Scans the I2C bus synchronously for devices the same way `i2cdetect -y -r` would.

**Returns:** `number`[]

    An array of numbers where each number represents the I2C address of a device which was detected.

___
<a id="sendbyte"></a>

###  sendByte

▸ **sendByte**(address: *`number`*, byte: *`number`*, callback: *`CompletionCallback`*): `void`

*Inherited from I2cBus.sendByte*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:253*

Asynchronous SMBus send byte.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| byte | `number` |  ```The data byte to send.``` |
| callback | `CompletionCallback` |  ```Completion callback``` |

**Returns:** `void`

___
<a id="sendbyteasync"></a>

###  sendByteAsync

▸ **sendByteAsync**(address: *`number`*, byte: *`number`*): `Promise`<`void`>

*Defined in [lib/types.ts:14](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| byte | `number` |

**Returns:** `Promise`<`void`>

___
<a id="sendbytesync"></a>

###  sendByteSync

▸ **sendByteSync**(address: *`number`*, byte: *`number`*): `void`

*Inherited from I2cBus.sendByteSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:263*

Synchronous SMBus send byte.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| byte | `number` |  ```The data byte to send.``` |

**Returns:** `void`

___
<a id="writebyte"></a>

###  writeByte

▸ **writeByte**(address: *`number`*, command: *`number`*, byte: *`number`*, callback: *`CompletionCallback`*): `void`

*Inherited from I2cBus.writeByte*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:277*

Asynchronous SMBus write byte.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| byte | `number` |  ```The data byte to write.``` |
| callback | `CompletionCallback` |  ```Completion callback``` |

**Returns:** `void`

___
<a id="writebyteasync"></a>

###  writeByteAsync

▸ **writeByteAsync**(address: *`number`*, command: *`number`*, byte: *`number`*): `Promise`<`void`>

*Defined in [lib/types.ts:20](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |
| byte | `number` |

**Returns:** `Promise`<`void`>

___
<a id="writebytesync"></a>

###  writeByteSync

▸ **writeByteSync**(address: *`number`*, command: *`number`*, byte: *`number`*): `void`

*Inherited from I2cBus.writeByteSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:289*

Synchronous SMBus write byte.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| byte | `number` |  ```The data byte to write.``` |

**Returns:** `void`

___
<a id="writei2cblock"></a>

###  writeI2cBlock

▸ **writeI2cBlock**(address: *`number`*, command: *`number`*, length: *`number`*, buffer: *`Buffer`*, callback: *`BufferCallback`*): `void`

*Inherited from I2cBus.writeI2cBlock*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:359*

Asynchronous I2C block write (not defined by the SMBus specification). Writes a block of bytes to a device, to a designated register that is specified by {command}.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| length | `number` |  ```The number of bytes to write (max 32).``` |
| buffer | `Buffer` |  ```The buffer that the data to write (must contain at least {length} bytes).``` |
| callback | `BufferCallback` |  ```Callback that will recieve the number of bytes written and the given buffer.``` |

**Returns:** `void`

___
<a id="writei2cblockasync"></a>

###  writeI2cBlockAsync

▸ **writeI2cBlockAsync**(address: *`number`*, command: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/types.ts:22](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="writei2cblocksync"></a>

###  writeI2cBlockSync

▸ **writeI2cBlockSync**(address: *`number`*, command: *`number`*, length: *`number`*, buffer: *`Buffer`*): `number`

*Inherited from I2cBus.writeI2cBlockSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:377*

Synchronous I2C block write (not defined by the SMBus specification). Writes a block of bytes to a device, to a designated register that is specified by {command}.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| length | `number` |  ```The number of bytes to write (max 32).``` |
| buffer | `Buffer` |  ```The buffer that the data will to write (must contain at least {length} bytes).``` |

**Returns:** `number`

    The number of bytes written.

___
<a id="writequick"></a>

###  writeQuick

▸ **writeQuick**(address: *`number`*, command: *`number`*, bit: *`number`*, callback: *`CompletionCallback`*): `void`

*Inherited from I2cBus.writeQuick*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:329*

Asynchronous SMBus quick command. Writes a single bit to the device.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| bit | `number` |  ```The data bit to write (0 or 1).``` |
| callback | `CompletionCallback` |  ```Completion callback``` |

**Returns:** `void`

___
<a id="writequicksync"></a>

###  writeQuickSync

▸ **writeQuickSync**(address: *`number`*, command: *`number`*, bit: *`number`*): `void`

*Inherited from I2cBus.writeQuickSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:341*

Synchronous SMBus quick command. Writes a single bit to the device.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| bit | `number` |  ```The data bit to write (0 or 1).``` |

**Returns:** `void`

___
<a id="writeword"></a>

###  writeWord

▸ **writeWord**(address: *`number`*, command: *`number`*, word: *`number`*, callback: *`CompletionCallback`*): `void`

*Inherited from I2cBus.writeWord*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:303*

Asynchronous SMBus write word.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| word | `number` |  ```The data word to write.``` |
| callback | `CompletionCallback` |  ```Completion callback``` |

**Returns:** `void`

___
<a id="writewordasync"></a>

###  writeWordAsync

▸ **writeWordAsync**(address: *`number`*, command: *`number`*, word: *`number`*): `Promise`<`void`>

*Defined in [lib/types.ts:21](https://github.com/AlejandroHerr/async-i2c-bus/blob/d8a1788/src/lib/types.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |
| word | `number` |

**Returns:** `Promise`<`void`>

___
<a id="writewordsync"></a>

###  writeWordSync

▸ **writeWordSync**(address: *`number`*, command: *`number`*, word: *`number`*): `void`

*Inherited from I2cBus.writeWordSync*

*Defined in /home/circleci/async-i2c-bus/node_modules/@types/i2c-bus/index.d.ts:315*

Synchronous SMBus write word.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| address | `number` |  ```I2C device address.``` |
| command | `number` |  ```The command code.``` |
| word | `number` |  ```The data word to write.``` |

**Returns:** `void`

___

