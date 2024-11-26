import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// DB Config
const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// Create and export DB Connection
export const db = await pool.connect();
