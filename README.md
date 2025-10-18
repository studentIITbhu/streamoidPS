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
The API is now accessible at: http://localhost:8000

API Documentation
Get All Products
Method: GET

URL: /products

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

URL: /upload

Description: Upload products using a CSV file.

Headers: Content-Type: multipart/form-data

Body Parameters:

file: CSV file containing products

CSV Format Example:

csv
Copy code
sku,name,brand,mrp,price,quantity,color
101,ProductA,BrandA,15000,12000,5,blue
102,ProductB,BrandB,20000,18000,3,red
Sample Response:

json
Copy code
{
  "success": true,
  "message": "Products uploaded successfully",
  "uploadedCount": 2
}
Get a Product by ID
Method: GET

URL: /products/{id}

Description: Retrieves a single product by its ID.

Sample Response:

json
Copy code
{
  "id": 37,
  "sku": "105",
  "name": "ProductX",
  "brand": "BrandB",
  "mrp": 18000,
  "price": 15000,
  "quantity": 3,
  "color": "red"
}
Update a Product
Method: PUT

URL: /products/{id}

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
Sample Response:

json
Copy code
{
  "success": true,
  "message": "Product updated successfully"
}
Delete a Product
Method: DELETE

URL: /products/{id}

Description: Deletes a product by ID.

Sample Response:

json
Copy code
{
  "success": true,
  "message": "Product deleted successfully"
}
Search Products
By Brand

Method: GET

URL: /products/search?brand=BrandA

Description: Returns products matching the brand.

By Color

Method: GET

URL: /products/search?color=blue

Description: Returns products matching the color.

By Price Range

Method: GET

URL: /products/search?minPrice=1000&maxPrice=30000

Description: Returns products within the specified price range.

Testing
Ensure the server is running (npm start).

Test endpoints using Postman, Insomnia, or any REST client.

For CSV uploads, ensure the file follows this format:

c
Copy code
sku,name,brand,mrp,price,quantity,color
101,ProductA,BrandA,15000,12000,5,blue
102,ProductB,BrandB,20000,18000,3,red
License
MIT License

yaml
Copy code

---

This version fixes previous issues:  

- Proper Markdown formatting  
- HTTP methods listed clearly (GET, POST, PUT, DELETE)  
- Body examples and CSV format included  
- Sample responses for each endpoint  
- Clean, professional structure for GitHub 