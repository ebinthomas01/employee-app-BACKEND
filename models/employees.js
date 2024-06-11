const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "firstname":String,
        "lastname":String,
        "company":String,
        "dob":String,
        "designation":String,
        "mobile":String,
        "email":String,
        "address":String
    }
)

let employeemodel=mongoose.model("employees",Schema);
module.exports={employeemodel}
