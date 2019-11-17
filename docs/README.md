# async-i2c-bus

<h1 align="center">async-i2c-bus</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/async-i2c-bus?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/async-i2c-bus.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/async-i2c-bus"><img alt="NPM Version" src="https://img.shields.io/npm/v/async-i2c-bus.svg" height="20"/></a>
<a href="https://david-dm.org/AlejandroHerr/async-i2c-bus"><img alt="Dependencies" src="https://img.shields.io/david/AlejandroHerr/async-i2c-bus.svg" height="20"/></a>
<a href="https://github.com/AlejandroHerr/async-i2c-bus/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/AlejandroHerr/async-i2c-bus.svg" height="20"/></a>
<a href="https://circleci.com/gh/AlejandroHerr/async-i2c-bus"><img alt="CircleCI" src="https://img.shields.io/circleci/project/github/AlejandroHerr/async-i2c-bus/master.svg?style=flat-square&logo=circleci" height="20"/></a>
<a href="https://codecov.io/gh/AlejandroHerr/async-i2c-bus"><img alt="codecov" src="https://codecov.io/gh/AlejandroHerr/async-i2c-bus/branch/master/graph/badge.svg" height="20"/></a>
<a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square" height="20"/></a>
<a href="https://github.com/semantic-release/semantic-release"><img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square" height="20"/></a>
	</p>

<p align="center">
  <b>Bus and Device classes for i2c-bus, with promised functions.</b></br>
  <sub><sub>
</p>

<br />

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#table-of-contents)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
	* [Bus](#bus)
	* [Device](#device)
	* [BusError](#buserror)
	* [Example](#example)
	* [Example using custom device](#example-using-custom-device)
* [License](#license)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#installation)

## Installation

```javascript
yarn add async-i2c-bus

// or

npm i async-i2c-bus
```

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#usage)

## Usage

The package exports the `Bus`, `Device` and `BusError` classes.

### Bus

The `Bus` wraps the original implementation with a `typescript` class.

To create a `Bus` use the static method `create` or `createAndOpen` (also opens the `bus`) with the following signatures:

`Bus.create({ busNumber }): Bus`

| Name        | Type   |
| ----------- | ------ |
| `busNumber` | number |

**Returns:** Bus

`Bus.createAndOpen({ busNumber }): Promise<Bus>`

| Name        | Type   |
| ----------- | ------ |
| `busNumber` | number |

**Returns:** Promise‹Bus›

### Device

`Device` inherits all the device-oriented methods from `Bus` and calls them with the device's address.

Also you can extends / compose it to create your specific device class. Read further for an example of it.

To create a `Device` use the static method `create` with the following signature:

`Device.create({ busNumber }): Device`

| Name      | Type   |
| --------- | ------ |
| `bus`     | bus    |
| `address` | number |

**Returns:** Device

### BusError

All the errors thrown by the bus are wrapped into `BusError`, which keeps the message and stack of the original error, but makes it easier to catch bus-specific errors.

### Example

```javascript
import { Bus, Device } from 'async-i2c-bus';

const WEATHER_SENSOR_ADDRESS = 0x77;

const main = async () => {
  const bus = Bus.create();

  await bus.open();

  const devices = await bus.scan();

  console.log(`Connected devices ${devices}`);

  const weatherSensor = Device.create({ address: WEATHER_SENSOR_ADDRESS, bus });

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

### Example using custom device

```javascript
import { Device } from 'async-i2c-bus';

const WEATHER_SENSOR_ADDRESS = 0x77;

class WeatherSensor {
  constructor({ bus }) {
    this.device = Device.create({ bus, address: WEATHER_SENSOR_ADDRESS });
  }

  async readTemperature() {
    const buffer = Buffer.alloc(3);

    await this.bus.readI2cBlock(0xfa, 3, buffer);

    return buffer.readUIntBE(0, 3) >>> 4;
  }
}
```

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#license)

## License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

<!-- [![Npm Package](https://img.shields.io/npm/v/homieiot.ts?style=flat-square)](https://www.npmjs.com/package/homieiot.ts)
[![Dependencies](https://img.shields.io/david/AlejandroHerr/homieiot.ts.svg?style=flat-square)](https://david-dm.org/alejandroherr/homieiot.ts)
[![Dev Dependencies](https://img.shields.io/david/dev/AlejandroHerr/homieiot.ts.svg?style=flat-square)](https://david-dm.org/alejandroherr/homieiot.ts?type=dev)
[![CircleCI](https://img.shields.io/circleci/project/github/AlejandroHerr/homieiot.ts/master.svg?style=flat-square&logo=circleci)](https://circleci.com/gh/AlejandroHerr/homieiot.ts)
[![codecov](https://codecov.io/gh/AlejandroHerr/homieiot.ts/branch/master/graph/badge.svg)](https://codecov.io/gh/AlejandroHerr/homieiot.ts)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) -->
