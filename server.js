const
    express = require('express')
    cors = require('cors')
    server = express()
    port = 8891
    bodyParser = require('body-parser')
    users = require('./router/users')
    tran = require('./router/transactions')

server.use(cors())
server.use(bodyParser.urlencoded({extends:true}))
server.get('/', (req,res)=> { 
    console.log(`user requset`)
    res.json(200)
})
server.use('/transactions', tran)
server.use('/users', users)

server.listen( port, () => console.log(`server running port ${port}`))