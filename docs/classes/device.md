# Class: Device

## Hierarchy

* **Device**

## Constructors

###  constructor

\+ **new Device**(`__namedParameters`: object): *[Device](device.md)*

*Defined in [src/lib/Device.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L8)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`address` | number |
`bus` | [Bus](bus.md)‹› |

**Returns:** *[Device](device.md)*

## Properties

###  address

• **address**: *number*

*Defined in [src/lib/Device.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L8)*

## Methods

###  deviceId

▸ **deviceId**(): *Promise‹number›*

*Defined in [src/lib/Device.ts:81](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L81)*

**Returns:** *Promise‹number›*

___

###  i2cRead

▸ **i2cRead**(`length`: number, `buffer`: Buffer): *Promise‹I2cReadResponse›*

*Defined in [src/lib/Device.ts:69](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |
`buffer` | Buffer |

**Returns:** *Promise‹I2cReadResponse›*

___

###  i2cWrite

▸ **i2cWrite**(`length`: number, `buffer`: Buffer): *Promise‹I2cWriteResponse›*

*Defined in [src/lib/Device.ts:75](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |
`buffer` | Buffer |

**Returns:** *Promise‹I2cWriteResponse›*

___

###  readByte

▸ **readByte**(`command`: number): *Promise‹number›*

*Defined in [src/lib/Device.ts:15](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | number |

**Returns:** *Promise‹number›*

___

###  readI2cBlock

▸ **readI2cBlock**(`command`: number, `length`: number, `buffer`: Buffer): *Promise‹I2cReadResponse›*

*Defined in [src/lib/Device.ts:27](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | number |
`length` | number |
`buffer` | Buffer |

**Returns:** *Promise‹I2cReadResponse›*

___

###  readWord

▸ **readWord**(`command`: number): *Promise‹number›*

*Defined in [src/lib/Device.ts:21](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | number |

**Returns:** *Promise‹number›*

___

###  receiveByte

▸ **receiveByte**(): *Promise‹number›*

*Defined in [src/lib/Device.ts:33](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L33)*

**Returns:** *Promise‹number›*

___

###  sendByte

▸ **sendByte**(`byte`: number): *Promise‹this›*

*Defined in [src/lib/Device.ts:39](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`byte` | number |

**Returns:** *Promise‹this›*

___

###  writeByte

▸ **writeByte**(`command`: number, `byte`: number): *Promise‹this›*

*Defined in [src/lib/Device.ts:45](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | number |
`byte` | number |

**Returns:** *Promise‹this›*

___

###  writeI2cBlock

▸ **writeI2cBlock**(`command`: number, `length`: number, `buffer`: Buffer): *Promise‹I2cWriteResponse›*

*Defined in [src/lib/Device.ts:63](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | number |
`length` | number |
`buffer` | Buffer |

**Returns:** *Promise‹I2cWriteResponse›*

___

###  writeQuick

▸ **writeQuick**(`bit`: 0 | 1): *Promise‹this›*

*Defined in [src/lib/Device.ts:57](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`bit` | 0 &#124; 1 |

**Returns:** *Promise‹this›*

___

###  writeWord

▸ **writeWord**(`command`: number, `word`: number): *Promise‹this›*

*Defined in [src/lib/Device.ts:51](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | number |
`word` | number |

**Returns:** *Promise‹this›*

___

### `Static` create

▸ **create**(`__namedParameters`: object): *[Device](device.md)*

*Defined in [src/lib/Device.ts:87](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/Device.ts#L87)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`address` | number |
`bus` | [Bus](bus.md)‹› |

**Returns:** *[Device](device.md)*
