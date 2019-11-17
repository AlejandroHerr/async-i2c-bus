Bus and Device classes for [i2c-bus](https://www.npmjs.com/package/i2c-bus), with promised functions.

**You probably don't need this library anymore**. The original purpose of the library was to have `async` methods instead of callbacks. Currently `i2c-bus` support promises.

**Besides that** it is still useful for me to have a class for Bus and Device, and an easy way to catch the errors produced in the bus, as well as typexcript typings. And it saves some time not having to write it for every library.
