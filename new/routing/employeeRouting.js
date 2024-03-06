const express = require("express");
const {
  addEmployee,
  deleteEmployee,
  updateEmployee,
  showEmployee,
  findaEmployee,
} = require("../controllers/employeeControllers.js");
const router = express.Router();

router.get("/employee/showAll", showEmployee);

router.get("/employee/show/:id", findaEmployee);

//to add employees
router.post("/employee/add", addEmployee);

//to update the employees data
router.put("/employee/update/:id", updateEmployee);

//delete an employee using delete method in http
router.delete("/employee/delete/:id", deleteEmployee);

module.exports = router;