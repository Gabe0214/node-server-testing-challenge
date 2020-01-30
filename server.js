const express = require('express')
const cors = require('cors')
const server = express()
const teacherRoutes = require('./teachers/teachers-routes')


server.use(express.json())
server.use(cors())


server.use('/teachers', teacherRoutes)
server.get('/', (req,res) => {
    res.send('server runing')
})

module.exports = server;