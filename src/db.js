import {createPool} from 'mysql2/promise';
import {DB_HOST,DB_NAME,DB_PASSWORD,DB_USER,DB_PORT} from './config.js';

//contraseña 1234

//como cambiar la contraseña de mysql

        // sudo mysql
        // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'very_strong_password';
        // FLUSH PRIVILEGES;


export const pool= createPool({
    user:DB_USER,
    password:DB_PASSWORD,
    host:DB_HOST,
    port:DB_PORT,
    database:DB_NAME,
})

//https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04-es

//SELECT user,authentication_string,plugin,host FROM mysql.user;

//6min