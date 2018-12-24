import DeviceError from './DeviceError';

describe('DeviceError', () => {
  it('should instantiate error with bus number, address and message', () => {
    const error = new DeviceError('Test error', 2, 0x55);

    expect(error.message).toBe('Test error');
    expect(error.busNumber).toBe(2);
    expect(error.deviceAddress).toBe(0x55);
  });
});
