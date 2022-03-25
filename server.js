const express  = require('express')
const { json } = require('express/lib/response')
const routes  = require('./router/routes')

const PORT = 3000

const app = express()

app.use(routes)
//app.use(json())


app.listen(PORT, ()=>{

    console.log("listen in " +  PORT)
})