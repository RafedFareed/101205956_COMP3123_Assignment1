const EmployeeModel = require("../models/EmployeeModel")
const express = require("express")
const router = express.Router()

router.get("/employees", async (req, res) => {
    try{
        const loginEmployee = await EmployeeModel.find()
        res.status(200).send(loginEmployee)
    }catch(error){
        res.status(500).send({message: "Error while finding employees"})
    }
})

router.post("/employees", async (req, res) => {
    const newEmployee = new EmployeeModel(req.body)
    try{
        await newEmployee.save()
        res.status(201).send(newEmployee)
    }catch(error){
        res.status(500).send({message: "Error while creating employee"})
    }
})

router.get("/employees/:id", async (req, res) => {
    try{
        const findEmployee = await EmployeeModel.findById(req.params.id)
        const fe = await findEmployee.save()
        res.status(200).send(fe)
    }catch(error){
        res.status(500).send({message: "Error while finding employee id"})
    }
})

router.put("/employees/:id", async (req, res) => {
    try{
        const updateEmployee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body)
        const ue = await updateEmployee.save()
        res.status(200).send(ue)
    }catch(error){
        res.status(500).send({message: "Error while updating employee"})
    }
})

router.delete("/employees/:id", async (req, res) => {
    try{
        const deleteEmployee = await EmployeeModel.findByIdAndDelete(req.params.id)
        if (!deleteEmployee) res.status(404).send("No id found")
            res.status(204).send()
    }catch(error){
        res.status(500).send({message: "Error while deleting employee"})
    }
})

module.exports = router