# StreamoidPS - Product Management API

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

3. Create a `.env` file in the root directory with the following content:
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

- **Method:** `GET`
- **URL:** `/products`
- **Description:** Retrieves a list of all products.
- **Sample Response:**
    ```
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
    ```

---

### 2️⃣ Create a New Product (CSV Upload)

- **Method:** `POST`
- **URL:** `/upload`
- **Description:** Upload products via CSV file.
- **Headers:** `Content-Type: multipart/form-data`
- **Body Parameters:** file (CSV file)
- **CSV Format Example:**
    ```
    sku,name,brand,mrp,price,quantity,color
    101,ProductA,BrandA,15000,12000,5,blue
    102,ProductB,BrandB,20000,18000,3,red
    ```
- **Sample Response:**
    ```
    {
        "success": true,
        "message": "Products uploaded successfully",
        "uploadedCount": 2
    }
    ```

---

### 3️⃣ Get a Product by ID

- **Method:** `GET`
- **URL:** `/products/{id}`
- **Description:** Retrieves a single product by ID.
- **Sample Response:**
    ```
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
    ```

---

### 4️⃣ Update a Product

- **Method:** `PUT`
- **URL:** `/products/{id}`
- **Description:** Updates product details by ID.
- **Body Example (JSON):**
    ```
    {
        "sku": "106",
        "name": "nokia2",
        "brand": "Brandg",
        "mrp": 19899,
        "price": 14978,
        "quantity": 9
    }
    ```
- **Sample Response:**
    ```
    {
        "success": true,
        "message": "Product updated successfully"
    }
    ```

---

### 5️⃣ Delete a Product

- **Method:** `DELETE`
- **URL:** `/products/{id}`
- **Description:** Deletes a product by ID.
- **Sample Response:**
    ```
    {
        "success": true,
        "message": "Product deleted successfully"
    }
    ```

---

### 6️⃣ Search Products

- **By Brand**
    - `GET /products/search?brand=BrandA`
- **By Color**
    - `GET /products/search?color=blue`
- **By Price Range**
    - `GET /products/search?minPrice=1000&maxPrice=30000`

---

## Testing

- Ensure the server is running (`npm start`)
- Test endpoints using Postman, Insomnia, or any REST client.
- For CSV uploads, ensure the file follows this format:
    ```
    sku,name,brand,mrp,price,quantity,color
    101,ProductA,BrandA,15000,12000,5,blue
    102,ProductB,BrandB,20000,18000,3,red
    ```

---


## 🧪 Unit Testing

This project includes **unit tests** to ensure reliability and correctness of key features.

### ✅ Covered Test Areas

- **CSV Parsing** — Verifies that CSV files are correctly read and parsed into product objects.
- **Data Validation** — Ensures that product data (SKU, price, quantity, etc.) follows required formats and constraints.
- **Search Filters** — Tests the filtering logic for brand, color, and price range queries.

### 🧰 How to Run Tests

Make sure dependencies are installed:
npm install

text

Run all tests:
npm test

text

### 🧾 Sample Test Output

Example output when running tests:
product-api@1.0.0 test
jest

PASS tests/csvParser.test.js
✓ should parse valid CSV correctly (15 ms)

PASS tests/validation.test.js
✓ should reject invalid price or quantity values (8 ms)

PASS tests/searchFilter.test.js
✓ should return correct products for brand filter (12 ms)
✓ should return correct products for color filter (9 ms)
✓ should return correct products within price range (10 ms)

Test Suites: 3 passed, 3 total
Tests: 5 passed, 5 total
Snapshots: 0 total
Time: 1.543 s
