const mysql=require('mysql2')
const con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library-ms'
})

//check 
con.connect(err=>{
    if(err){
        return console.log("Database failed to be connected", err)
    }
    return console.log("Database Connected Success!")
})

module.exports=con