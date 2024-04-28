const mongoose = require('mongoose')
require('dotenv').config()
const database = ()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("connection succesfuly")
    }).catch((error)=>{
        console.log("Issue in db connection");
        console.error(error.message)
        process.exit(1);
    })
}
module.exports = database;