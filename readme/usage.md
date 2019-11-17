## Usage

The package exports the `Bus`, `Device` and `BusError` classes.

You can check the [full documentation](https://async-i2c-bus.alejandroherr.io/)

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
