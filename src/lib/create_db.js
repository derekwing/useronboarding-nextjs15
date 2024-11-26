import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

const createDb = async () => {
  const db = await pool.connect();

  try {
    await db.query("DROP TABLE IF EXISTS users");
    await db.query("DROP TABLE IF EXISTS customformcontent");
    await db.query(
      "CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(100), password VARCHAR(100), bio VARCHAR(255), address VARCHAR(255), city VARCHAR(255), state VARCHAR(255), zipcode VARCHAR(255), birthmonth INTEGER, birthdate INTEGER, birthyear INTEGER)"
    );
    await db.query(
      "CREATE TABLE customformcontent (id SERIAL PRIMARY KEY, admin_id INTEGER, page INTEGER, fields text[])"
    );

    await db.query(
      "INSERT INTO customformcontent (admin_id, page, fields) VALUES ($1, $2, $3)",
      [1, 1, ["About Me"]]
    );

    await db.query(
      "INSERT INTO customformcontent (admin_id, page, fields) VALUES ($1, $2, $3)",
      [1, 2, ["Address"]]
    );

    db.release();
    console.log("Successfully created tables for db");
  } catch (err) {
    console.error(err);
    console.log("Error when trying to create tables for db");
  } finally {
    pool.end();
  }
};

createDb();
