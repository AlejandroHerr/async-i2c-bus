# Class: Bus

## Hierarchy

* **Bus**

## Constructors

###  constructor

\+ **new Bus**(`__namedParameters`: object): *[Bus](bus.md)*

*Defined in [src/lib/Bus.ts:10](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L10)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`busNumber` | number |

**Returns:** *[Bus](bus.md)*

## Properties

###  busNumber

• **busNumber**: *number*

*Defined in [src/lib/Bus.ts:8](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L8)*

___

###  isOpen

• **isOpen**: *boolean* = false

*Defined in [src/lib/Bus.ts:10](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L10)*

## Methods

###  close

▸ **close**(): *Promise‹this›*

*Defined in [src/lib/Bus.ts:35](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L35)*

**Returns:** *Promise‹this›*

___

###  deviceId

▸ **deviceId**(`address`: number): *Promise‹number›*

*Defined in [src/lib/Bus.ts:205](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |

**Returns:** *Promise‹number›*

___

###  i2cFuncs

▸ **i2cFuncs**(): *Promise‹I2cFuncs›*

*Defined in [src/lib/Bus.ts:49](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L49)*

**Returns:** *Promise‹I2cFuncs›*

___

###  i2cRead

▸ **i2cRead**(`address`: number, `length`: number, `buffer`: Buffer): *Promise‹I2cReadResponse›*

*Defined in [src/lib/Bus.ts:169](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`length` | number |
`buffer` | Buffer |

**Returns:** *Promise‹I2cReadResponse›*

___

###  i2cWrite

▸ **i2cWrite**(`address`: number, `length`: number, `buffer`: Buffer): *Promise‹I2cWriteResponse›*

*Defined in [src/lib/Bus.ts:181](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`length` | number |
`buffer` | Buffer |

**Returns:** *Promise‹I2cWriteResponse›*

___

###  open

▸ **open**(): *Promise‹this›*

*Defined in [src/lib/Bus.ts:22](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L22)*

**Returns:** *Promise‹this›*

___

###  readByte

▸ **readByte**(`address`: number, `command`: number): *Promise‹number›*

*Defined in [src/lib/Bus.ts:61](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`command` | number |

**Returns:** *Promise‹number›*

___

###  readI2cBlock

▸ **readI2cBlock**(`address`: number, `command`: number, `length`: number, `buffer`: Buffer): *Promise‹I2cReadResponse›*

*Defined in [src/lib/Bus.ts:85](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`command` | number |
`length` | number |
`buffer` | Buffer |

**Returns:** *Promise‹I2cReadResponse›*

___

###  readWord

▸ **readWord**(`address`: number, `command`: number): *Promise‹number›*

*Defined in [src/lib/Bus.ts:73](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`command` | number |

**Returns:** *Promise‹number›*

___

###  receiveByte

▸ **receiveByte**(`address`: number): *Promise‹number›*

*Defined in [src/lib/Bus.ts:97](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |

**Returns:** *Promise‹number›*

___

###  scan

▸ **scan**(`startAddress?`: undefined | number, `endAddress?`: undefined | number): *Promise‹number[]›*

*Defined in [src/lib/Bus.ts:193](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`startAddress?` | undefined &#124; number |
`endAddress?` | undefined &#124; number |

**Returns:** *Promise‹number[]›*

___

###  sendByte

▸ **sendByte**(`address`: number, `byte`: number): *Promise‹this›*

*Defined in [src/lib/Bus.ts:109](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`byte` | number |

**Returns:** *Promise‹this›*

___

###  writeByte

▸ **writeByte**(`address`: number, `command`: number, `byte`: number): *Promise‹this›*

*Defined in [src/lib/Bus.ts:121](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`command` | number |
`byte` | number |

**Returns:** *Promise‹this›*

___

###  writeI2cBlock

▸ **writeI2cBlock**(`address`: number, `command`: number, `length`: number, `buffer`: Buffer): *Promise‹I2cWriteResponse›*

*Defined in [src/lib/Bus.ts:157](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`command` | number |
`length` | number |
`buffer` | Buffer |

**Returns:** *Promise‹I2cWriteResponse›*

___

###  writeQuick

▸ **writeQuick**(`address`: number, `bit`: 0 | 1): *Promise‹this›*

*Defined in [src/lib/Bus.ts:145](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`bit` | 0 &#124; 1 |

**Returns:** *Promise‹this›*

___

###  writeWord

▸ **writeWord**(`address`: number, `command`: number, `word`: number): *Promise‹this›*

*Defined in [src/lib/Bus.ts:133](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | number |
`command` | number |
`word` | number |

**Returns:** *Promise‹this›*

___

### `Static` create

▸ **create**(`__namedParameters`: object): *[Bus](bus.md)*

*Defined in [src/lib/Bus.ts:217](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L217)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`busNumber` | number |

**Returns:** *[Bus](bus.md)*

___

### `Static` createAndOpen

▸ **createAndOpen**(`__namedParameters`: object): *Promise‹[Bus](bus.md)›*

*Defined in [src/lib/Bus.ts:221](https://github.com/AlejandroHerr/async-i2c-bus/blob/a580dec/src/lib/Bus.ts#L221)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`busNumber` | number |

**Returns:** *Promise‹[Bus](bus.md)›*
