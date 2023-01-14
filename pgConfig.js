//Импортируем класс Pool из модуля pg
//import dotenv from 'dotenv'
import pg from "pg";
//dotenv.config()

//Создаём пул соединений с сервером.
export const pool = new pg.Pool({connectionString: process.env.DB_URL,
	    ssl: { rejectUnauthorized: false}
})