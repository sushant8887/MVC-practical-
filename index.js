const express=require("express");
const app=express();
app.set("view engine",'ejs');

const users=[{
    name:'Alice',city:'New York'
},
{name:'Indar',city:'Pakistan'},
{name:'Speksy',city:'Thailand'},
{name:'Virar ka kim jon',city:'China'}];

app.get("/",(req,res)=>{
    res.render("users",{users:users});
});

app.listen(3000,()=>{
    console.log('listning.....');
})