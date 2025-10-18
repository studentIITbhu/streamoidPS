
const express = require('express');
  const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middlewares/uploadMiddleware'); 

router.get('/', productController.getAllProducts);
router.get('/search', productController.searchProducts); 
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
  router.delete('/:id', productController.deleteProduct);

router.post('/upload', upload.single('file'), require('../controllers/uploadController').uploadCSV);
module.exports = router;
