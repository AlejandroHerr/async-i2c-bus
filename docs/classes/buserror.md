# Class: BusError

## Hierarchy

* Error

  ↳ **BusError**

## Properties

###  message

• **message**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from void*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984

## Methods

### `Static` create

▸ **create**(`message`: string): *[BusError](buserror.md)*

*Defined in [src/lib/BusError.ts:2](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/BusError.ts#L2)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *[BusError](buserror.md)*

___

### `Static` createFromError

▸ **createFromError**(`error`: Error): *[BusError](buserror.md)*

*Defined in [src/lib/BusError.ts:15](https://github.com/AlejandroHerr/async-i2c-bus/blob/d5954a7/src/lib/BusError.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *[BusError](buserror.md)*
