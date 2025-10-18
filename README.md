# StreamoidPS - Product Management API

![Node.js](https://img.shields.io/badge/Node.js-v22-green)
![NPM](https://img.shields.io/badge/npm-installed-blue)
![MySQL](https://img.shields.io/badge/MySQL-required-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

A backend API for managing products. Supports uploading products via CSV, listing, updating, deleting, and searching products.

---

## Table of Contents
- [Setup](#setup)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [License](#license)

---

## Setup

### Prerequisites
- Node.js v22+
- npm
- MySQL server

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/studentIITbhu/streamoidPS.git
   cd streamoidPS
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory with your database configuration:

env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=productdb
PORT=8000
Start the server:

bash
Copy code
npm start
Access the API at http://localhost:8000

API Documentation
Get All Products
Method: GET

URL: http://localhost:8000/products

Description: Retrieves a list of all products.

Sample Response:

json
Copy code
[
  {
    "id": 1,
    "sku": "101",
    "name": "ProductA",
    "brand": "BrandA",
    "mrp": 15000,
    "price": 12000,
    "quantity": 5,
    "color": "blue"
  }
]
Create a New Product
Method: POST

URL: http://localhost:8000/upload

Description: Upload products using a CSV file.

Headers: Content-Type: multipart/form-data

Body Example: (multipart form)

makefile
Copy code
file: products.csv
Notes: CSV format should be:

csv
Copy code
sku,name,brand,mrp,price,quantity,color
101,ProductA,BrandA,15000,12000,5,blue
102,ProductB,BrandB,20000,18000,3,red
Get a Product by ID
Method: GET

URL: http://localhost:8000/products/37

Description: Retrieves a single product by its ID.

Update a Product
Method: PUT

URL: http://localhost:8000/products/42

Description: Updates product details by ID.

Body Example (JSON):

json
Copy code
{
  "sku": "106",
  "name": "nokia2",
  "brand": "Brandg",
  "mrp": 19899,
  "price": 14978,
  "quantity": 9
}
Delete a Product
Method: DELETE

URL: http://localhost:8000/products/30

Description: Deletes a product by ID.

Search Products
By Brand

Method: GET

URL: http://localhost:8000/products/search?brand=BrandA

By Color

Method: GET

URL: http://localhost:8000/products/search?color=blue

By Price Range

Method: GET

URL: http://localhost:8000/products/search?minPrice=1000&maxPrice=30000

Testing
Ensure the server is running (npm start).

Use Postman, Insomnia, or your browser to test endpoints.

For CSV uploads, ensure the CSV format is:

cs
Copy code
sku,name,brand,mrp,price,quantity,color
101,ProductA,BrandA,15000,12000,5,blue
102,ProductB,BrandB,20000,18000,3,red
License
MIT License

yaml
Copy code

---

This README.md includes:  
- **Badges** for Node.js, npm, MySQL, and License  
- **Setup instructions** with `.env` config  
- **Clean API Documentation** with GET, POST, PUT, DELETE endpoints  
- **Testing instructions**  
- **License section**  

---