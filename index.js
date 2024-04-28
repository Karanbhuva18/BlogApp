const express = require('express')
const app = express()
const blogrouter = require('./Router/router')



app.use(express.json())

app.use('/api/b1',blogrouter);

require('dotenv').config()
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`SERVER IS running on PORT NO ${PORT}`)
})

const database = require('./Database/Blogdatabase')
database()

app.get('/',(req,res)=>{
    res.send(`<h1>this is home page</h1>`)
})