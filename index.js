const express=require('express')
const mongoose=require('mongoose')
const bodyParse=require('body-parser')
const dbConfig=require('./config/database')
const app=express()

mongoose.connect(dbConfig.url)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})


app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())

require('./routes/CampusRoutes')(app)

app.listen(3000)
console.log('Listen on port 3000');
