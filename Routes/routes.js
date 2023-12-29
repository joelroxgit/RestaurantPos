const express = require('express');
const router = express.Router();
const pool = require('../Database/database')
const {crudUsers} = require('../Controllers/controllers')

//home page

router.get('/',(req,res)=>{
    res.send('home page')
});

//****************admin****************
// Add user //Delete User // Update User

app.put('/mytable/:category',crudUsers)

//admin

router.get('/admin',(req,res)=>{

})

//chef

router.get('/chef',(req,res)=>{
    res.send('chefpage')
})

//cash register

router.get('/cashregister',(req,res)=>{
    
})

module.exports = router;