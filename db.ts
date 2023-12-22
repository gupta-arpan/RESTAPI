import pg from 'pg';
const Pool = pg.Pool;
 
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'students',
  password: 'gupta@arpan@2838',
  port: 5432,
})

export {pool}