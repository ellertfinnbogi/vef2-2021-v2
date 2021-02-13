import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const {
  DATABASE_URL: connectionString,
} = process.env;

console.log(process.env)
if (!connectionString) {
  console.log(process.env)
  console.error('Vantar DATABASE_URL');
  process.exit(1);
}

// TODO gagnagrunnstengingar
const pool = new pg.Pool({connectionString});
const client = await pool.connect();

export default client;
