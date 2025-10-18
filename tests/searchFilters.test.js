const request = require('supertest');
const app = require('../src/app'); 
const db = require('../src/config/db'); 

jest.setTimeout(20000); 
describe('Search Products API', () => {

  beforeAll(async () => {
    try {
      // Delete if exists to avoid duplicate errors
      await db.query(`DELETE FROM products WHERE sku='TSHIRT-RED-001'`);
      
      // Insert a product
      await db.query(
        `INSERT INTO products (sku,name,brand,color,size,mrp,price,quantity)
         VALUES ('TSHIRT-RED-001','Classic Cotton T-Shirt','StreamThreads','Red','M',799,499,20)`
      );
    } catch (err) {
      console.error("Error in beforeAll:", err);
    }
  });

  // Clean after tests
  afterAll(async () => {
    try {
      await db.query(`DELETE FROM products WHERE sku='TSHIRT-RED-001'`);
      await db.end(); // close  database connection after tests
       } catch (err) {
      console.error("Error in afterAll:", err);
    }
  });

  test('Filter by brand', async () => {
    const response = await request(app)
          .get('/products/search?brand=StreamThreads')
      .expect(200);
    
       expect(response.body.results.length).toBeGreaterThan(0);
    response.body.results.forEach(product => {
      expect(product.brand.toLowerCase()).toContain('streamthreads');
    });
  }, 10000); 
  test('Filter by price range', async () => {
    const response = await request(app)
          .get('/products/search?minPrice=500&maxPrice=1000')
      .expect(200);

    expect(response.body.results.length).toBeGreaterThan(0);
    response.body.results.forEach(product => {
      expect(product.price).toBeGreaterThanOrEqual(500);
      expect(product.price).toBeLessThanOrEqual(1000);
    });
  }, 10000); // 10s timeout for this test

  test('Dummy test to ensure suite runs', () => {
    expect(true).toBe(true);
  });
});
