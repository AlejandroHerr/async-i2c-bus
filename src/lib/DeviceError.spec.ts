import Bus from './Bus';
import BusError from './BusError';
import { I2cBusPromised } from './types';

describe('BusError', () => {
  it('should instantiate error with bus number and message', () => {
    const error = new BusError('Test error', 2);

    expect(error.message).toBe('Test error');
    expect(error.busNumber).toBe(2);
  });
});
