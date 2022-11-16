const {Schema, model} = require('mongoose');

const AdminSchema = new Schema({
    password:{
        type: String,
        value:'cMsG9TRoR',
        required:true
    }
})
const Admin = model("Admin", AdminSchema)
module.exports = Admin;