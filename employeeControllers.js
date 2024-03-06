const model = require('../models/employeeModel.js');


const addEmployee = async(req,res)=>{
    let emp= req.body; //fetch the data from request
    const data = new model.empModel(emp);
    const result = await data.save()
    .then(()=>res.send('employee added...'))
    .catch((err)=>console.log(err));
    console.log(result);
}

const updateEmployee = async (req,res)=>{
    const id = req.params.id;
    let {name,salary} = req.body;
    console.log(req.body);
    const result = await model.empModel.updateOne({id:id},{$set : {name:name, salary : salary}})
    .then(()=>res.send('employee data updated...'))
    .catch((err)=>console.log(err))
    console.log(result);
}

const deleteEmployee = async(req,res)=>{
    const id = Number(req.params.id);
    const result = await model.empModel.deleteOne({id:id})
    .then(()=> res.send('one employee deleted...'))
    .catch((err)=>console.log(err))
    console.log(result);
}

const showEmployee = async (req,res)=>{
    const result = await model.empModel.find();
    console.log(result);
    res.json(result);
}

const findaEmployee = async (req,res)=>{
    const id = req.params.id;
    const result = await model.empModel.find({id:id});
    res.json(result);   
}
module.exports ={ addEmployee,deleteEmployee,updateEmployee,showEmployee, findaEmployee}