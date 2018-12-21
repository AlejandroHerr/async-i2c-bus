
async-i2c-bus
=============

![](https://img.shields.io/npm/v/async-i2c-bus.svg) ![](https://img.shields.io/david/AlejandroHerr/async-i2c-bus.svg?style=flat-square) ![](https://img.shields.io/david/dev/AlejandroHerr/async-i2c-bus.svg?style=flat-square) ![CircleCI](https://img.shields.io/circleci/project/github/AlejandroHerr/async-i2c-bus/master.svg?style=flat-square&logo=circleci) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) ![](https://img.shields.io/github/license/AlejandroHerr/async-i2c-bus.svg?style=flat-square)

Install
-------

Choose your flavour:

```bash
yarn add async-i2c-bus

npm i -P async-i2c-bus
```

## Index

### Classes

* [BusError](classes/buserror.md)
* [DeviceError](classes/deviceerror.md)

### Interfaces

* [BusInterface](interfaces/businterface.md)
* [DeviceInterface](interfaces/deviceinterface.md)
* [I2cBusPromised](interfaces/i2cbuspromised.md)

### Functions

* [Bus](#bus)
* [Device](#device)
* [createI2cBusMock](#createi2cbusmock)

### Object literals

* [defaultI2cBusFuncs](#defaulti2cbusfuncs)

---

## Functions

<a id="bus"></a>

### `<Const>` Bus

▸ **Bus**(__namedParameters?: *`object`*): [BusInterface](interfaces/businterface.md)

*Defined in [lib/Bus.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/Bus.ts#L8)*

**Parameters:**

**`Default value` __namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| busNumber | `number` | 1 |
| openBus | `open` |  openI2cBus |

**Returns:** [BusInterface](interfaces/businterface.md)

___
<a id="device"></a>

### `<Const>` Device

▸ **Device**(__namedParameters: *`object`*): [DeviceInterface](interfaces/deviceinterface.md)

*Defined in [lib/Device.ts:4](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/Device.ts#L4)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| address | `number` |
| bus | [BusInterface](interfaces/businterface.md) |

**Returns:** [DeviceInterface](interfaces/deviceinterface.md)

___
<a id="createi2cbusmock"></a>

### `<Const>` createI2cBusMock

▸ **createI2cBusMock**(__namedParameters?: *`object`*): `open`

*Defined in [lib/createI2cBusMock.ts:24](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L24)*

**Parameters:**

**`Default value` __namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| devices | `object` | - |
| i2cBusFuncs | `I2cBusFuncs` |  defaultI2cBusFuncs |

**Returns:** `open`

___

## Object literals

<a id="defaulti2cbusfuncs"></a>

### `<Const>` defaultI2cBusFuncs

**defaultI2cBusFuncs**: *`object`*

*Defined in [lib/createI2cBusMock.ts:3](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L3)*

<a id="defaulti2cbusfuncs.i2c"></a>

####  i2c

**● i2c**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:4](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L4)*

___
<a id="defaulti2cbusfuncs.protocolmangling"></a>

####  protocolMangling

**● protocolMangling**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:6](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L6)*

___
<a id="defaulti2cbusfuncs.smbusblockproccall"></a>

####  smbusBlockProcCall

**● smbusBlockProcCall**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L8)*

___
<a id="defaulti2cbusfuncs.smbuspec"></a>

####  smbusPec

**● smbusPec**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:7](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L7)*

___
<a id="defaulti2cbusfuncs.smbusproccall"></a>

####  smbusProcCall

**● smbusProcCall**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:16](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L16)*

___
<a id="defaulti2cbusfuncs.smbusquick"></a>

####  smbusQuick

**● smbusQuick**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:9](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L9)*

___
<a id="defaulti2cbusfuncs.smbusreadblock"></a>

####  smbusReadBlock

**● smbusReadBlock**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:17](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L17)*

___
<a id="defaulti2cbusfuncs.smbusreadbyte"></a>

####  smbusReadByte

**● smbusReadByte**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:12](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L12)*

___
<a id="defaulti2cbusfuncs.smbusreadi2cblock"></a>

####  smbusReadI2cBlock

**● smbusReadI2cBlock**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:19](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L19)*

___
<a id="defaulti2cbusfuncs.smbusreadword"></a>

####  smbusReadWord

**● smbusReadWord**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:14](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L14)*

___
<a id="defaulti2cbusfuncs.smbusreceivebyte"></a>

####  smbusReceiveByte

**● smbusReceiveByte**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:10](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L10)*

___
<a id="defaulti2cbusfuncs.smbussendbyte"></a>

####  smbusSendByte

**● smbusSendByte**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:11](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L11)*

___
<a id="defaulti2cbusfuncs.smbuswriteblock"></a>

####  smbusWriteBlock

**● smbusWriteBlock**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:18](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L18)*

___
<a id="defaulti2cbusfuncs.smbuswritebyte"></a>

####  smbusWriteByte

**● smbusWriteByte**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:13](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L13)*

___
<a id="defaulti2cbusfuncs.smbuswritei2cblock"></a>

####  smbusWriteI2cBlock

**● smbusWriteI2cBlock**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:20](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L20)*

___
<a id="defaulti2cbusfuncs.smbuswriteword"></a>

####  smbusWriteWord

**● smbusWriteWord**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:15](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L15)*

___
<a id="defaulti2cbusfuncs.tenbitaddr"></a>

####  tenBitAddr

**● tenBitAddr**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:5](https://github.com/AlejandroHerr/async-i2c-bus/blob/bf7a2c5/src/lib/createI2cBusMock.ts#L5)*

___

___

