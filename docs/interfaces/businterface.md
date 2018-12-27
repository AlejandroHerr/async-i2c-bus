[async-i2c-bus](../README.md) > [BusInterface](../interfaces/businterface.md)

# Interface: BusInterface

## Hierarchy

**BusInterface**

## Index

### Properties

* [busNumber](businterface.md#busnumber)
* [i2cBus](businterface.md#i2cbus)
* [isOpen](businterface.md#isopen)

### Methods

* [close](businterface.md#close)
* [i2cFuncs](businterface.md#i2cfuncs)
* [i2cRead](businterface.md#i2cread)
* [i2cWrite](businterface.md#i2cwrite)
* [open](businterface.md#open)
* [readByte](businterface.md#readbyte)
* [readI2cBlock](businterface.md#readi2cblock)
* [readWord](businterface.md#readword)
* [receiveByte](businterface.md#receivebyte)
* [scan](businterface.md#scan)
* [sendByte](businterface.md#sendbyte)
* [writeByte](businterface.md#writebyte)
* [writeI2cBlock](businterface.md#writei2cblock)
* [writeWord](businterface.md#writeword)

---

## Properties

<a id="busnumber"></a>

###  busNumber

**● busNumber**: *`number`*

*Defined in [lib/BusInterface.ts:6](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L6)*

___
<a id="i2cbus"></a>

###  i2cBus

**● i2cBus**: * [I2cBusPromised](i2cbuspromised.md) &#124; `null`
*

*Defined in [lib/BusInterface.ts:7](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L7)*

___
<a id="isopen"></a>

###  isOpen

**● isOpen**: *`boolean`*

*Defined in [lib/BusInterface.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L8)*

___

## Methods

<a id="close"></a>

###  close

▸ **close**(): `Promise`<[BusInterface](businterface.md)>

*Defined in [lib/BusInterface.ts:11](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L11)*

**Returns:** `Promise`<[BusInterface](businterface.md)>

___
<a id="i2cfuncs"></a>

###  i2cFuncs

▸ **i2cFuncs**(): `Promise`<`I2cBusFuncs`>

*Defined in [lib/BusInterface.ts:13](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L13)*

**Returns:** `Promise`<`I2cBusFuncs`>

___
<a id="i2cread"></a>

###  i2cRead

▸ **i2cRead**(address: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/BusInterface.ts:16](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="i2cwrite"></a>

###  i2cWrite

▸ **i2cWrite**(address: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/BusInterface.ts:17](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="open"></a>

###  open

▸ **open**(): `Promise`<[BusInterface](businterface.md)>

*Defined in [lib/BusInterface.ts:10](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L10)*

**Returns:** `Promise`<[BusInterface](businterface.md)>

___
<a id="readbyte"></a>

###  readByte

▸ **readByte**(address: *`number`*, command: *`number`*): `Promise`<`number`>

*Defined in [lib/BusInterface.ts:22](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |

**Returns:** `Promise`<`number`>

___
<a id="readi2cblock"></a>

###  readI2cBlock

▸ **readI2cBlock**(address: *`number`*, command: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/BusInterface.ts:23](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="readword"></a>

###  readWord

▸ **readWord**(address: *`number`*, command: *`number`*): `Promise`<`number`>

*Defined in [lib/BusInterface.ts:24](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |

**Returns:** `Promise`<`number`>

___
<a id="receivebyte"></a>

###  receiveByte

▸ **receiveByte**(address: *`number`*): `Promise`<`number`>

*Defined in [lib/BusInterface.ts:19](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |

**Returns:** `Promise`<`number`>

___
<a id="scan"></a>

###  scan

▸ **scan**(): `Promise`<`number`[]>

*Defined in [lib/BusInterface.ts:14](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L14)*

**Returns:** `Promise`<`number`[]>

___
<a id="sendbyte"></a>

###  sendByte

▸ **sendByte**(address: *`number`*, byte: *`number`*): `Promise`<`void`>

*Defined in [lib/BusInterface.ts:20](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| byte | `number` |

**Returns:** `Promise`<`void`>

___
<a id="writebyte"></a>

###  writeByte

▸ **writeByte**(address: *`number`*, command: *`number`*, byte: *`number`*): `Promise`<`void`>

*Defined in [lib/BusInterface.ts:26](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |
| byte | `number` |

**Returns:** `Promise`<`void`>

___
<a id="writei2cblock"></a>

###  writeI2cBlock

▸ **writeI2cBlock**(address: *`number`*, command: *`number`*, length: *`number`*, buffer: *`Buffer`*): `Promise`<`number`>

*Defined in [lib/BusInterface.ts:28](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |
| length | `number` |
| buffer | `Buffer` |

**Returns:** `Promise`<`number`>

___
<a id="writeword"></a>

###  writeWord

▸ **writeWord**(address: *`number`*, command: *`number`*, word: *`number`*): `Promise`<`void`>

*Defined in [lib/BusInterface.ts:27](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/BusInterface.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `number` |
| command | `number` |
| word | `number` |

**Returns:** `Promise`<`void`>

___

