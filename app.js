const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {employeemodel}=require("./models/employees")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ebinthomas01:ebinthomas01@cluster0.te6dmsx.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req,res) => {
    let input=req.body
    let employee=new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({"status":"success"})
})

app.get("/view", (req,res) => {
    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})


app.listen(8081,()=> {				
    console.log("Server Started")
})


