const express=require('express')
const mongoose=require('mongoose')
const bodyParse=require('body-parser')
const dbConfig=require('./config/database')
const app=express()

mongoose.connect(dbConfig.url)

app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())

require('./routes/CampusRoutes')(app)

app.listen(3000)
console.log('Listen on port 3000');
