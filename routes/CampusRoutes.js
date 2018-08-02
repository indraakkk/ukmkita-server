const CampusModels = require('../models/CampusModel').CampusModels
module.exports=function(app){

    app.get('/fourcampus/campuses', (req, res)=>{
        CampusModels.find({}, (err, campuses)=>{
            if(err)
            return res.send(err)
            res.json(campuses)
        })
    })
    app.get('/fourcampus/campuses', (req, res)=> {
        CampusModels.find({'_id':req.params.id}, (err, campuses)=> {
            if(err)
            return res.send(err)
            res.json(campuses)
        })
    })
}