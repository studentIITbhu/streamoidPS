
const db = require('../config/db'); 

//  pagination & sorting
const getAllProducts = async (req, res) => {
  try {
    let { page = 1, limit = 10, sortBy = 'id', order = 'asc' } = req.query;
      page = Number(page);
    limit = Number(limit);
    const offset = (page - 1) * limit;

    const [results] = await db.query(
         `SELECT * FROM products ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`,
      [limit, offset]
    );

    res.json({ page, limit, results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Create a product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, brand, color } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: 'Missing name or price' });
    }

    const [result] = await db.query(
      'INSERT INTO products (name, price, description, brand, color) VALUES (?, ?, ?, ?, ?)',
      [name, price, description || null, brand || null, color || null]
    );

    res.status(201).json({ message: 'Product created', id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
          if (!results.length) return res.status(404).json({ error: 'Product not found' });
    res.json(results[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Update product by ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { sku, name, brand, mrp, price, quantity } = req.body;

    const [result] = await db.query(
            'UPDATE products SET sku=?, name=?, brand=?, mrp=?, price=?, quantity=? WHERE id=?',
      [sku, name, brand, mrp, price, quantity, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully' });
  } catch (err) {
                 console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM products WHERE id=?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Search products with filters + pagination + sorting

const searchProducts = async (req, res) => {
  try {
    const { brand, color, minPrice, maxPrice } = req.query;
    let sql = 'SELECT * FROM products WHERE 1=1';
    const params = [];

    if (brand) {
           sql += ' AND brand LIKE ?';
      params.push(`%${brand}%`);
    }

    if (color) {
           sql += ' AND color LIKE ?';
      params.push(`%${color}%`);
    }

        if (minPrice) {
      sql += ' AND price >= ?';
      params.push(Number(minPrice));
    }

         if (maxPrice) {
      sql += ' AND price <= ?';
          params.push(Number(maxPrice));
    }

    const [results] = await db.query(sql, params);

    // Convert price strings to numbers
    const formattedResults = results.map(p => ({
      ...p,
        price: p.price ? Number(p.price) : 0,
    }));

    return res.status(200).json({ results: formattedResults });
  } catch (error) {
        console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts, 
};
