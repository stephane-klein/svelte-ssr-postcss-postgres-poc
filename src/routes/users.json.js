import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  database: process.env.POSTGRES_DB || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
  port: process.env.POSTGRES_PORT || 5432
})

export async function get() {
    const { rows } = await pool.query(`
        SELECT
            id,
            username,
            email
        FROM
            users
        ORDER BY
            username
    `);
    return {
        body: {
            users: rows
        }
    };
}
