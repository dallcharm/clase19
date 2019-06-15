const express = require('express')

const app = express()

function rootHandler (request,response){
    response.set('Content-Type','text/plain')
    response.status(201)
    response.send('Hello World')
    
   }

app.use(express.json())
app.all('/',rootHandler)
app.listen(2000)