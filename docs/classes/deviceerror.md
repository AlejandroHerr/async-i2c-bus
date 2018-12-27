[async-i2c-bus](../README.md) > [DeviceError](../classes/deviceerror.md)

# Class: DeviceError

## Hierarchy

 `Error`

**↳ DeviceError**

## Index

### Constructors

* [constructor](deviceerror.md#constructor)

### Properties

* [busNumber](deviceerror.md#busnumber)
* [deviceAddress](deviceerror.md#deviceaddress)
* [message](deviceerror.md#message)
* [name](deviceerror.md#name)
* [stack](deviceerror.md#stack)
* [Error](deviceerror.md#error)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DeviceError**(message: *`string`*, busNumber: *`number`*, deviceAddress: *`number`*): [DeviceError](deviceerror.md)

*Defined in [lib/DeviceError.ts:3](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/DeviceError.ts#L3)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `string` |
| busNumber | `number` |
| deviceAddress | `number` |

**Returns:** [DeviceError](deviceerror.md)

___

## Properties

<a id="busnumber"></a>

###  busNumber

**● busNumber**: *`number`*

*Defined in [lib/DeviceError.ts:2](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/DeviceError.ts#L2)*

___
<a id="deviceaddress"></a>

###  deviceAddress

**● deviceAddress**: *`number`*

*Defined in [lib/DeviceError.ts:3](https://github.com/AlejandroHerr/async-i2c-bus/blob/d6f8f27/src/lib/DeviceError.ts#L3)*

___
<a id="message"></a>

###  message

**● message**: *`string`*

*Inherited from Error.message*

*Defined in /home/circleci/async-i2c-bus/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:904*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from Error.name*

*Defined in /home/circleci/async-i2c-bus/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:903*

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: * `undefined` &#124; `string`
*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in /home/circleci/async-i2c-bus/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:905*

___
<a id="error"></a>

### `<Static>` Error

**● Error**: *`ErrorConstructor`*

*Defined in /home/circleci/async-i2c-bus/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:914*

___

