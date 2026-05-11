const express = require("express")
const con=require('./Database')
const app=express()
const port=4000

app.get('/', (req, res)=>{
    res.send("hello server!")
})
app.get('/about', (req, res)=>{
    res.send("This is our about route")
})

//starting dev server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})