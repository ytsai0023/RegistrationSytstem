const express = require('express')
const router = new express.Router()

router.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

router.get('/user',async (req,res)=>{
    let db = req.con
    try{
        await db.query("select * from users",function (err,rows){
            if(err){console.log(err)}
            let data = JSON.parse(JSON.stringify(rows))
            res.send(data)
        })
    
    }catch(e){
        res.status(500).send(e)
    }  
})

router.get('/user',async (req,res)=>{
    let db = req.con
    try{
        await db.query("select * from users",function (err,rows){
            if(err){console.log(err)}
            let data = JSON.parse(JSON.stringify(rows))
            res.send(data)
        })
    
    }catch(e){
        res.status(500).send(e)
    }  
})

router.post('/user',async (req,res)=>{
    let db = req.con
    let user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    try{
        await db.query("insert into users SET ?",user,function (err,rows){
            if(err){
                throw new Error('Insert error!!!')
            }            
            res.send(user)     
        })
    
    }catch(e){
        res.status(500).send(e)
    }  
})

router.post('/user',async (req,res)=>{
    let db = req.con
    let user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    try{
        await db.query("ins ert into users SET ?",user,function (err,user){
            if(err){
                throw new Error('Insert error!!!')
            }            
            res.send(user)     
        })
    
    }catch(e){
        res.status(500).send(e)
    }  
})


router.post('/user/update',async (req,res)=>{
    let db = req.con
    let _id = req.body.id
    let user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }  
    try{

            await db.query("UPDATE users SET ? where id =? ",[user,_id],function (err,_id){
            if(err){
                throw new Error('update fail!!!')
            }            
           
        })
        res.send('update ok')     
    }catch(e){
        res.status(500).send(e)
    }  

})


router.get('/user/delete/:id',async (req,res)=>{
    let _id = req.params.id
    let db = req.con
    try{
        await db.query("delete from users where id = ?",_id,(err,_id)=>{
            if(err){
                throw new Error('Delete failed')
            }           
        })
        res.send(_id)
    }catch(e){
        res.status(404).send(e)
    }

    res.send(_id)
})




module.exports = router