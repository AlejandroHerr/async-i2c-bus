# async-i2c-bus

[![Npm Package](https://img.shields.io/npm/v/async-i2c-bus.svg)](https://www.npmjs.com/package/async-i2c-bus) [![Dependencies](https://img.shields.io/david/AlejandroHerr/async-i2c-bus.svg?style=flat-square)](https://david-dm.org/alejandroherr/async-i2c-bus) [![Dev Dependencies](https://img.shields.io/david/dev/AlejandroHerr/async-i2c-bus.svg?style=flat-square)](https://david-dm.org/alejandroherr/async-i2c-bus?type=dev) ![CircleCI](https://img.shields.io/circleci/project/github/AlejandroHerr/async-i2c-bus/master.svg?style=flat-square&logo=circleci) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![MIT License](https://img.shields.io/github/license/AlejandroHerr/async-i2c-bus.svg?style=flat-square)](https://github.com/AlejandroHerr/async-i2c-bus/blob/master/LICENSE.md)

Promised Bus and Device factories for [i2c-bus](https://github.com/fivdi/i2c-bus).

This package replaces [i2c-bus-promised](https://github.com/AlejandroHerr/i2c-bus-promised)

## Installation

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

The package requires node `v8.10.x` or higher.
If you need a compatibility with lower versions of node, you can build it. To do so clone the repo in your workspace, and modify the `target` options in the `tsconfig.json`, e.g:

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

## Usage

The package exports the `Bus` factory to create a `BusInterface`. The `BusInterface` is an object with the same methods available in the original `i2c-bus` but promised. The signature of the factory is the following:

```js
const Bus = ({ busNumber = 1, openBus = openI2cBus } = {}): BusInterface
```

- `busNumber` is the i2c bus number, and defaults to 1. Unless your devices has more than one bus, it will suit you.
- `openBus` is the function to open the bus. It defaults to `i2c.openBus`, but it would accept any function with the same signature. You shouldn't pass this value, except if you're in a testing environment.

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
