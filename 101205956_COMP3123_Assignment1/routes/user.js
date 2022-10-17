const UserModel = require("../models/UserModel")
const express = require("express")
const router = express.Router()

router.post("/signup", async (req, res) => {
    const newUser = new UserModel(req.body)
    try{
        await newUser.save()
        res.status(201).send(newUser)
    }catch(error){
        res.status(500).send({message: "Error while creating user"})
    }
})

router.post("/login", async (req, res) => {
    try{
        const loginUser = await UserModel.find()
        res.status(200).send(loginUser)        
    }catch(error){
        res.status(500).send({message: "Error while finding users"})
    }
})

module.exports = router