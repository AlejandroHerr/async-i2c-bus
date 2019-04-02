
async-i2c-bus
=============

[![Npm Package](https://img.shields.io/npm/v/async-i2c-bus.svg)](https://www.npmjs.com/package/async-i2c-bus) [![Dependencies](https://img.shields.io/david/AlejandroHerr/async-i2c-bus.svg?style=flat-square)](https://david-dm.org/alejandroherr/async-i2c-bus) [![Dev Dependencies](https://img.shields.io/david/dev/AlejandroHerr/async-i2c-bus.svg?style=flat-square)](https://david-dm.org/alejandroherr/async-i2c-bus?type=dev) ![CircleCI](https://img.shields.io/circleci/project/github/AlejandroHerr/async-i2c-bus/master.svg?style=flat-square&logo=circleci) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![MIT License](https://img.shields.io/github/license/AlejandroHerr/async-i2c-bus.svg?style=flat-square)](https://github.com/AlejandroHerr/async-i2c-bus/blob/master/LICENSE.md)

Promised Bus and Device factories for [i2c-bus](https://github.com/fivdi/i2c-bus).

This package replaces [i2c-bus-promised](https://github.com/AlejandroHerr/i2c-bus-promised)

Installation
------------

Choose your flavour, yarn:

```bash
yarn add async-i2c-bus
```

or npm:

```bash
npm i -P async-i2c-bus
```

And you're ready to go.

### Requirements

The package requires node `v8.10.x` or higher. If you need a compatibility with lower versions of node, you can build it. To do so clone the repo in your workspace, and modify the `target` options in the `tsconfig.json`, e.g:

```js
{
  "compilerOptions": {
    "target": "es5", // <-- Line changed
    "outDir": "dist/main",
    "rootDir": "src",
    // ..
  }
}
```

And build the module with `yarn build` or `npm run build`.

Usage
-----

The package exports the `Bus` factory to create a `BusInterface`. The `BusInterface` is an object with the same methods available in the original `i2c-bus` but promised. The signature of the factory is the following:

```js
const Bus = ({ busNumber = 1, openBus = openI2cBus } = {}): BusInterface
```

*   `busNumber` is the i2c bus number, and defaults to 1. Unless your devices has more than one bus, it will suit you.
*   `openBus` is the function to open the bus. It defaults to `i2c.openBus`, but it would accept any function with the same signature. You shouldn't pass this value, except if you're in a testing environment.

The package also exports the `Device` factory to create a `DeviceInterface`. This is a helper method to call the `i2cBus` methods with the address of your device. It has the following signature:

```js
const Device = ({ address, bus }: { address: number; bus: BusInterface }): DeviceInterface
```

You don't need to use a `DeviceInterface` in order to work with this library, but it helps.

For more details, check the full auto-generated [documentation](https://async-i2c-bus.alejandroherr.io).

### Example

```js
const WEATHER_SENSOR_ADDRESS = 0x77;

const main = async () => {
  const bus = Bus();

  await bus.open();

  const devices = await bus.scan();

  console.log(`Connected devices ${devices}`);

  const weatherSensor = Device({ address: WEATHER_SENSOR_ADDRESS, bus });

  // Configure Weather Sensor (BMP280)
  await weatherSensor.writeByte(0xf4, 0b00100101);
  await weatherSensor.writeByte(0xf5, 0b00100100);

  // Read temperature
  const temperatureBuffer = Buffer.alloc(3);
  await weatherSensor.readI2cBlock(0xfa, 3, temperatureBuffer);
  const temperature = temperatureBuffer.readUIntBE(0, 3) >>> 4;

  console.log(`Temperature: ${temperature}`);
};
```

### Example extending device

Also you can extend your device to implement specific methods. Take the previous case:

```js
const WeatherSensor = ({ bus }) => ({
  ...Device({ address: 0x77, bus }),
  async init() {
    await this.writeByte(0xf4, 0b00100101);
    await this.writeByte(0xf5, 0b00100100);

    return this;
  },
  async readTemperature() {
    const buffer = Buffer.alloc(3);

    await this.readI2cBlock(0xfa, 3, buffer);

    return buffer.readUIntBE(0, 3) >>> 4;
  },
});

const main = async () => {
  const bus = Bus();

  await bus.open();

  const weatherSensor = await WeatherSensor({ bus }).init();
  const temperature = await weatherSensor.readTemperature();

  console.log(`Temperature: ${temperature}`);
};
```

### Testing

Testing i2c code can be expensive and slow. It may take some time to deploy and run your e2e tests/code in a low powered device. For that, you can use the `createI2cBusMock` function and write some unit tests. Although you shouldn't relay too much on the values read and written (it works as if the i2c bus is just a memory), it can help you to test that the right functions are being invoked.

```js
import { Bus, Device } from '../dist/main';

jest.mock('i2c-bus', () => {
  const createI2cBusMock = require('../dist/main/lib/createI2cBusMock').default; // eslint-disable-line global-require

  return {
    open: createI2cBusMock({
      devices: {
        0xab: Buffer.allocUnsafe(0xff),
      },
    }),
  };
});

describe('Device', () => {
  it('should write the right command', async () => {
    const busNumber = 1;
    const bus = Bus({ busNumber });
    const address = 0xab;
    const device = Device({ address, bus });

    await bus.open();

    const spyOnWriteByte = jest.spyOn(bus, 'writeByte');
    await device.writeByte(0x0f, 0xff);
    expect(spyOnWriteByte).toHaveBeenCalledWith(address, 0x0f, 0xff);
  });
});
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

*Defined in [lib/Bus.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/Bus.ts#L8)*

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

*Defined in [lib/Device.ts:4](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/Device.ts#L4)*

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

*Defined in [lib/createI2cBusMock.ts:24](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L24)*

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

*Defined in [lib/createI2cBusMock.ts:3](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L3)*

<a id="defaulti2cbusfuncs.i2c"></a>

####  i2c

**● i2c**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:4](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L4)*

___
<a id="defaulti2cbusfuncs.protocolmangling"></a>

####  protocolMangling

**● protocolMangling**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:6](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L6)*

___
<a id="defaulti2cbusfuncs.smbusblockproccall"></a>

####  smbusBlockProcCall

**● smbusBlockProcCall**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L8)*

___
<a id="defaulti2cbusfuncs.smbuspec"></a>

####  smbusPec

**● smbusPec**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:7](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L7)*

___
<a id="defaulti2cbusfuncs.smbusproccall"></a>

####  smbusProcCall

**● smbusProcCall**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:16](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L16)*

___
<a id="defaulti2cbusfuncs.smbusquick"></a>

####  smbusQuick

**● smbusQuick**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:9](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L9)*

___
<a id="defaulti2cbusfuncs.smbusreadblock"></a>

####  smbusReadBlock

**● smbusReadBlock**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:17](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L17)*

___
<a id="defaulti2cbusfuncs.smbusreadbyte"></a>

####  smbusReadByte

**● smbusReadByte**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:12](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L12)*

___
<a id="defaulti2cbusfuncs.smbusreadi2cblock"></a>

####  smbusReadI2cBlock

**● smbusReadI2cBlock**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:19](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L19)*

___
<a id="defaulti2cbusfuncs.smbusreadword"></a>

####  smbusReadWord

**● smbusReadWord**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:14](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L14)*

___
<a id="defaulti2cbusfuncs.smbusreceivebyte"></a>

####  smbusReceiveByte

**● smbusReceiveByte**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:10](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L10)*

___
<a id="defaulti2cbusfuncs.smbussendbyte"></a>

####  smbusSendByte

**● smbusSendByte**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:11](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L11)*

___
<a id="defaulti2cbusfuncs.smbuswriteblock"></a>

####  smbusWriteBlock

**● smbusWriteBlock**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:18](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L18)*

___
<a id="defaulti2cbusfuncs.smbuswritebyte"></a>

####  smbusWriteByte

**● smbusWriteByte**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:13](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L13)*

___
<a id="defaulti2cbusfuncs.smbuswritei2cblock"></a>

####  smbusWriteI2cBlock

**● smbusWriteI2cBlock**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:20](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L20)*

___
<a id="defaulti2cbusfuncs.smbuswriteword"></a>

####  smbusWriteWord

**● smbusWriteWord**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:15](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L15)*

___
<a id="defaulti2cbusfuncs.tenbitaddr"></a>

####  tenBitAddr

**● tenBitAddr**: *`boolean`* = false

*Defined in [lib/createI2cBusMock.ts:5](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/createI2cBusMock.ts#L5)*

___

___

