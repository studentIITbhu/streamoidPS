require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 
 app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', productRoutes);
app.use('/', productRoutes);
app.get('/', (req, res) => res.send('API is running'));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
module.exports = app; 