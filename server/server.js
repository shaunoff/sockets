const path = require('path')
const express = require('express')

let app = express()

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

app.listen(3000, ()=>{
  console.log("server is up on 3000")
})
