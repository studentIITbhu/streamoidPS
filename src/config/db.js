/**
 * Database Connection Setup using MySQL2 and dotenv
 * -------------------------------------------------
 * This file creates a connection pool to the MySQL database using environment variables.
 * It ensures safe, reusable, and efficient database access across your entire API.
 */

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Destructure environment variables for easier access
const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;

// Basic validation — ensures your .env has all the required fields
if (!DB_HOST || !DB_USER || !DB_NAME) {
  console.error('❌ Missing required database configuration in .env file!');
  process.exit(1); // Stop the app from running if DB info is incomplete
}

// Create a connection pool (better than single connection for APIs)
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT ? Number(DB_PORT) : 3306, // Default port is 3306 if not provided
  waitForConnections: true,  // Wait instead of throwing an error if all connections are busy
  connectionLimit: 10,       // Max number of active connections in the pool
  queueLimit: 0              // 0 = no limit on queued requests
});

// Export the pool so other files (like controllers or models) can use it
module.exports = pool;

console.log('✅ Database connection pool created successfully.');
