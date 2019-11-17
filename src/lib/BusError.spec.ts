import BusError from './BusError';

describe('BusError', () => {
  describe('static create', () => {
    it('should create an instance of BusError with the message ', () => {
      const errorMessage = 'Test Error';
      const busError = BusError.create(errorMessage);

      expect(busError.message).toBe(errorMessage);
    });
  });
  describe('static createFromError', () => {
    it('should create an instance of BusError with the message and stack of the previous error', () => {
      const error = new Error('Test Error');
      const busError = BusError.createFromError(error);

      expect(busError.message).toBe(error.message);
      expect(busError.stack).toBe(error.stack);
    });
  });
});
