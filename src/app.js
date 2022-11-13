import express from "express";
import { pool } from './db.js';
import {PORT} from './config.js';


const app= express()

//haader020 cotra root
// sudo mysql contraclasica

//como abrir mi servidor desde crhomes
//primero ejecutar en consola, luego ir a "localhost:3000"
//node src/app.js
//localhost:3000
app.get('/', async (req,res)=>{
    //res.send("bienvenido a mi primer servidor!")
    const [result]= await pool.query(`select * from users`)
    res.json(result[0]);
    console.log(result[0])
})

app.get('/p',async (req, res) => {

    const [result]= await pool.query(`SELECT "hola mundo" as result`);
    console.log(result[0]);
    res.json(result[0].result);
//    res.send("realizando la lectura de la DB");
    
})

app.get('/create',async (req, res)=>{

    const result= await pool.query(`insert into users(name) values ("mi primer usuario")`)
    res.json(result[0]);

})

app.listen(PORT);
console.log("el servidor se inicio en el puerto " ,PORT);

//video de fazt 
//https://www.youtube.com/watch?v=C3NhmT__Mn4
//minuto 10/

