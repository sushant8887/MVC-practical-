const express = require('express');
const connectMongo = require('./connection.js');
const employeeRoutes = require('./routing/employeeRouting.js');

const  app = express();
connectMongo();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.sendFile('/views/home.html',{root:__dirname});
})

app.get('/aboutus',(req,res)=>{
    res.sendFile('/views/aboutus.html',{root:__dirname});
})

app.use(employeeRoutes);


app.listen(3000,()=>{
    console.log("listeing...");
})