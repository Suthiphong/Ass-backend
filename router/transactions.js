const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Transactions = require('../models/transactions')
mongoose.connect('mongodb://localhost:27017/Assignment', {useNewUrlParser: true})

router.use(express.json())

router.get('/', async (req,res)=> {
    let {users} = req.query
    const result = await Transactions.find({
        user: '5e5d07c84a418f9a85cec8ea',
    })
    if(result.length == 0){
        res.json({
            data: 'cannot found user',
        })
    }else{
        res.json(result)
        console.log(result)
    }
})

router.post('/', async (req,res)=> {
    const create = new Transactions(req.body)
    await create.save()
    res.json({
        data:"create successfully."
    })
})

router.put('/:id', async (req,res)=> {
    let {id} = req.params
    const update = await Transactions.findByIdAndUpdate(id, {$set: req.body})
    res.json({
        data:"update transactions successfully."
    })
})

router.delete('/:id', async(req,res)=> {
    let {id} = req.params
    const del = await Transactions.findOneAndRemove(id)
    res.json({
        data:"delete transactions successfully."
    })
})
module.exports = router