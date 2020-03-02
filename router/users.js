const 
    express = require('express')
    router = express.Router()
    mongoose = require('mongoose')
    Users = require('../models/users')

mongoose.connect('mongodb://localhost:27017/Assignment', {useNewUrlParser: true})
router.use(express.json())

//5e5d07c84a418f9a85cec8ea
router.get('/', async(req,res)=> {
    const user = await Users.find({})
    res.json(user)
})
router.post('/login', async (req,res)=> {
    let {username, password} = req.body
    const result = await Users.find({
        username, password
    })
    if(result.length == 0){
        res.json({
            data:"username or password is incorrect."
        })
    }
    console.log(result)
    res.json(result)

})
router.get('/:id', async (req,res)=> {
    let {id} = req.params
    const result = await Users.find({"_id": id})
    if(result.length == 0) {
        res.json({
            data:"cannot found user."
        })
    }
    res.json(result)

})

router.post('/', async (req,res)=> {
    let regis = req.body
    const result = await Users.find({
        "username": regis.username
    })
    if(result.length == 0) {
        let add = new Users(regis)
        await add.save()
        res.json(regis)
    }else{
        res.json({
            data: "username has already existed."
        })
    }
    
})
module.exports = router