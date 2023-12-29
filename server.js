const express = require('express');
const app= express();


require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json())
const router = require('./Routes/routes')



const pool = require('./Database/database')
  


const start = async () => {
    try {
      const connection = await pool.getConnection();
      console.log('Connected to MySQL database!');
      connection.release();
    } catch (error) {
      console.error('Error connecting to MySQL: ', error);
    }
  }

app.use('/',router)
start();

app.listen(PORT,()=>{
    console.log('server started')
})