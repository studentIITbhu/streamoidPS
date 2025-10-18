const { validateRow } = require('../src/utils/validator');
describe('CSV Product Validation', () => {
     test('Valid row should pass', () => {
    const row = {
      sku: 'TSHIRT-RED-001',
      name: 'Classic Cotton T-Shirt',
      brand: 'StreamThreads',
      color: 'Red',
      size: 'M',
      mrp: 799,
      price: 499,
      quantity: 20
    };
      expect(validateRow(row).valid).toBe(true);
  });

  test('Row with missing required field should fail', () => {
    const row = {
      sku: 'TSHIRT-RED-002',
      name: '',
      brand: 'StreamThreads',
      mrp: 799,
      price: 499,
      quantity: 10
    };
      expect(validateRow(row).valid).toBe(false);
  });

  test('Row with price greater than MRP should fail', () => {
      const row = {
      sku: 'TSHIRT-RED-003',
      name: 'Classic Cotton T-Shirt',
      brand: 'StreamThreads',
      mrp: 500,
      price: 600,
      quantity: 5
      };
    expect(validateRow(row).valid).toBe(false);
  });

  test('Row with negative quantity should fail', () => {
       const row = {
      sku: 'TSHIRT-RED-004',
      name: 'Classic Cotton T-Shirt',
      brand: 'StreamThreads',
      mrp: 799,
      price: 499,
      quantity: -1
    };
      expect(validateRow(row).valid).toBe(false);
  });

});
