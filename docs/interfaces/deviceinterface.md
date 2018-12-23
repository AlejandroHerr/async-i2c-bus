[async-i2c-bus](../README.md) > [DeviceInterface](../interfaces/deviceinterface.md)

# Interface: DeviceInterface

## Hierarchy

**DeviceInterface**

## Index

### Properties

* [address](deviceinterface.md#address)
* [bus](deviceinterface.md#bus)

### Methods

* [i2cRead](deviceinterface.md#i2cread)
* [i2cWrite](deviceinterface.md#i2cwrite)
* [readByte](deviceinterface.md#readbyte)
* [readI2cBlock](deviceinterface.md#readi2cblock)
* [readWord](deviceinterface.md#readword)
* [receiveByte](deviceinterface.md#receivebyte)
* [sendByte](deviceinterface.md#sendbyte)
* [writeByte](deviceinterface.md#writebyte)
* [writeI2cBlock](deviceinterface.md#writei2cblock)
* [writeWord](deviceinterface.md#writeword)

---

## Properties

<a id="address"></a>

###  address

**● address**: *`number`*

*Defined in [lib/DeviceInterface.ts:4](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L4)*

___
<a id="bus"></a>

###  bus

**● bus**: *[BusInterface](businterface.md)*

*Defined in [lib/DeviceInterface.ts:5](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L5)*

___

## Methods

<a id="i2cread"></a>

###  i2cRead

▸ **i2cRead**(length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/DeviceInterface.ts:7](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="i2cwrite"></a>

###  i2cWrite

▸ **i2cWrite**(length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/DeviceInterface.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="readbyte"></a>

###  readByte

▸ **readByte**(command: *`number`*): `Promise`<`number`>

*Defined in [lib/DeviceInterface.ts:13](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | `number` |

**Returns:** `Promise`<`number`>

___
<a id="readi2cblock"></a>

###  readI2cBlock

▸ **readI2cBlock**(command: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/DeviceInterface.ts:14](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="readword"></a>

###  readWord

▸ **readWord**(command: *`number`*): `Promise`<`number`>

*Defined in [lib/DeviceInterface.ts:15](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | `number` |

**Returns:** `Promise`<`number`>

___
<a id="receivebyte"></a>

###  receiveByte

▸ **receiveByte**(): `Promise`<`number`>

*Defined in [lib/DeviceInterface.ts:10](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L10)*

**Returns:** `Promise`<`number`>

___
<a id="sendbyte"></a>

###  sendByte

▸ **sendByte**(byte: *`number`*): `Promise`<`void`>

*Defined in [lib/DeviceInterface.ts:11](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| byte | `number` |

**Returns:** `Promise`<`void`>

___
<a id="writebyte"></a>

###  writeByte

▸ **writeByte**(command: *`number`*, byte: *`number`*): `Promise`<`void`>

*Defined in [lib/DeviceInterface.ts:17](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | `number` |
| byte | `number` |

**Returns:** `Promise`<`void`>

___
<a id="writei2cblock"></a>

###  writeI2cBlock

▸ **writeI2cBlock**(command: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/DeviceInterface.ts:19](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="writeword"></a>

###  writeWord

▸ **writeWord**(command: *`number`*, word: *`number`*): `Promise`<`void`>

*Defined in [lib/DeviceInterface.ts:18](https://github.com/AlejandroHerr/async-i2c-bus/blob/93ea53e/src/lib/DeviceInterface.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | `number` |
| word | `number` |

**Returns:** `Promise`<`void`>

___

