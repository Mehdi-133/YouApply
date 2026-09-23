import "dotenv/config"  
import mysql from "mysql2/promise"
import pool from "./connection.js";

await pool.execute("SET FOREIGN_KEY_CHECKS = 0");
await pool.execute("TRUNCATE TABLE offre_technologie");
await pool.execute("TRUNCATE TABLE offer");
await pool.execute("TRUNCATE TABLE technology");
await pool.execute("TRUNCATE TABLE company");
await pool.execute("SET FOREIGN_KEY_CHECKS = 1");

console.log("reset data successfully ");

await pool.end()






