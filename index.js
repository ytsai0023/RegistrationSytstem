const express = require('express')
const mysql = require('mysql')
const app = express()
var userRouter = require('./routers/users');
const port = process.env.PORT || 3000
const path = require('path')



const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "account"
})

pool.getConnection(function(err){
    if(err){
        console.log(err)
        console.log('connection err')
        return
    }
    console.log(`db connection success`)
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(function(req, res, next) {
    req.con = pool
    next();
});



app.use(userRouter)

app.listen(port,()=>{
    console.log('Listen port '+port)
   
} )