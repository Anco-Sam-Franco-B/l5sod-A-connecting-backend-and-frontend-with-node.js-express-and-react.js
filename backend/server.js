const express = require("express")
const cors=require('cors')
const con=require('./Database')
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//API ROUTES FOR CRUD OPERATIONS HTTP METHODS [GET, POST, PUT/PATCH, DELETE]
app.get('/books', (req, res)=>{
    con.query('SELECT * FROM books', (err, data)=>{
        if(err){
            return res.status(500).json({
                message: 'Internal Server Error',
                errorMessage: err.message
            })
        }

        return res.status(200).json({
            message: 'Books Fetched!',
            result: data
        })
    })
})



//starting dev server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})