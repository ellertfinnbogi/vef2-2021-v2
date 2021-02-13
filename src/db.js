import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const {
  HEROKU_POSTGRESQL_BLACK_URL: connectionString,
} = process.env;

console.log(process.env)

if (!connectionString) {
  console.log(process.env)
  console.error('Vantar DATABASE_URL');
  process.exit(1);
}
const ssl = nodeEnv !== 'development' ? { rejectUnauthorized: false } : false;
// TODO gagnagrunnstengingar
const pool = new pg.Pool({connectionString,ssl});
const client = await pool.connect();

export default client;
