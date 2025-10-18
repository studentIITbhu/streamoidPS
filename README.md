# StreamoidPS - Product Management API

![Node.js](https://img.shields.io/badge/Node.js-v22-green)
![NPM](https://img.shields.io/badge/npm-installed-blue)
![MySQL](https://img.shields.io/badge/MySQL-required-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

A backend API for managing products. Supports uploading products via CSV, listing, updating, deleting, and searching products.

---

## Table of Contents
1. [Setup](#setup)
2. [API Documentation](#api-documentation)
3. [Testing](#testing)
4. [License](#license)

---

## Setup

### Prerequisites
- Node.js v22+
- npm
- MySQL server

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/studentIITbhu/streamoidPS.git
    cd streamoidPS
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Create a `.env` file in the root directory:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=productdb
    PORT=8000
    ```
4. Start the server:
    ```
    npm start
    ```
    The API is now accessible at [http://localhost:8000](http://localhost:8000)

---

## API Documentation

### 1️⃣ Get All Products  
- **Method:** GET  
- **URL:** `/products`  
- **Description:** Retrieves a list of all products.

**Sample Response**
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

text

---

### 2️⃣ Create a New Product  
- **Method:** POST  
- **URL:** `/upload`  
- **Description:** Upload products via CSV file.
- **Headers:** Content-Type: multipart/form-data
- **Body Parameters:** file (CSV file)

**CSV Format Example**
sku,name,brand,mrp,price,quantity,color
101,ProductA,BrandA,15000,12000,5,blue
102,ProductB,BrandB,20000,18000,3,red

text
**Sample Response**
{
"success": true,
"message": "Products uploaded successfully",
"uploadedCount": 2
}

text

---

### 3️⃣ Get a Product by ID  
- **Method:** GET  
- **URL:** `/products/{id}`  
- **Description:** Retrieves a single product by ID.

**Sample Response**
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

text

---

### 4️⃣ Update a Product  
- **Method:** PUT  
- **URL:** `/products/{id}`  
- **Description:** Updates product details by ID.

**Body Example (JSON)**
{
"sku": "106",
"name": "nokia2",
"brand": "Brandg",
"mrp": 19899,
"price": 14978,
"quantity": 9
}

text
**Sample Response**
{
"success": true,
"message": "Product updated successfully"
}

text

---

### 5️⃣ Delete a Product  
- **Method:** DELETE  
- **URL:** `/products/{id}`  
- **Description:** Deletes a product by ID.

**Sample Response**
{
"success": true,
"message": "Product deleted successfully"
}

text

---

### 6️⃣ Search Products  

#### By Brand  
- **Method:** GET  
- **URL:** `/products/search?brand=DenimWorks`  
- **Description:** Returns products matching the brand.

**Sample Response**
{
"results": [
{
"id": 53,
"sku": "JEANS-BLU-032",
"name": "Slim Fit Jeans",
"brand": "DenimWorks",
"color": "Blue",
"size": "32",
"mrp": "1999.00",
"price": 1599,
"quantity": 15
}
]
}

text

#### By Color  
- **Method:** GET  
- **URL:** `/products/search?color=Blue`  
- **Description:** Returns products matching the color.

**Sample Response**
{
"results": [
{
"id": 53,
"sku": "JEANS-BLU-032",
"name": "Slim Fit Jeans",
"brand": "DenimWorks",
"color": "Blue",
"size": "32",
"mrp": "1999.00",
"price": 1599,
"quantity": 15
},
{
"id": 58,
"sku": "KURTA-BLU-M",
"name": "Cotton Kurta",
"brand": "Ethniq",
"color": "Blue",
"size": "M",
"mrp": "1599.00",
"price": 1299,
"quantity": 22
},
{
"id": 65,
"sku": "SHIRT-PLN-L",
"name": "Plain Oxford Shirt",
"brand": "ButtonUp",
"color": "Blue",
"size": "L",
"mrp": "1899.00",
"price": 1499,
"quantity": 12
}
]
}

text

#### By Price Range  
- **Method:** GET  
- **URL:** `/products/search?minPrice=1000&maxPrice=2000`  
- **Description:** Returns products within the specified price range.

**Sample Response**
{
"results": [
{
"id": 53,
"sku": "JEANS-BLU-032",
"name": "Slim Fit Jeans",
"brand": "DenimWorks",
"color": "Blue",
"size": "32",
"mrp": "1999.00",
"price": 1599,
"quantity": 15
},
{
"id": 58,
"sku": "KURTA-BLU-M",
"name": "Cotton Kurta",
"brand": "Ethniq",
"color": "Blue",
"size": "M",
"mrp": "1599.00",
"price": 1299,
"quantity": 22
}
]
}

text

---

## Testing

- Ensure the server is running (`npm start`)
- Test endpoints using Postman, Insomnia, or any REST client.
- For CSV uploads, ensure the file follows this format:
sku,name,brand,mrp,price,quantity,color
101,ProductA,BrandA,15000,12000,5,blue