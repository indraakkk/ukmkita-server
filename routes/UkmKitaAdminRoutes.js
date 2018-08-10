const AdminModels = require('../models/UkmKitaAdminModels').AdminModels
module.exports=function(app){

    app.get('/ukmkita/admin', (req, res)=>{
        AdminModels.find({}, (err, admin)=>{
            if(err)
            return res.send(err)
            res.json(admin)
        })
    })
    app.get('/ukmkita/admin/:id', (req, res)=> {
        AdminModels.find({'_id':req.params.id}, (err, admin)=> {
            if(err)
            return res.send(err)
            res.json(admin)
        })
    })

    app.post('/ukmkita/admin/add', (req, res)=>{
        const admin = new AdminModels()
        admin.user_admin=req.body.user_admin
        admin.pass_admin=req.body.pass_admin
        admin.email_admin=req.body.email_admin

        console.log(req.body.name_campus)
        admin.save((err,admin)=>{
            if(err)
            return res.send(err)
            res.json({'status':'OK!', data:admin})
        })
        
    })
    app.put('/ukmkita/admin/edit',(req, res)=>{
        AdminModels.findOne({user_admin: req.body.user_admin}, (err, admin)=>{
            if(err)
            return res.send(err)
            admin.user_admin=req.body.user_admin
            admin.pass_admin=req.body.pass_admin
            admin.email_admin=req.body.email_admin

            admin.save((err, admin)=>{
                if(err)
                return res.send(err)
                res.json({'status':'OK!', data:admin})  
            })
        })
    })
    app.delete('/ukmkita/admin/delete/:id', (req, res)=>{
        AdminModels.findById(req.params.id, (err, admin)=>{
            if(err)
            return res.send(err)
            admin.remove((err)=>{
                if(err)
                return res.send(err)
                res.json({'status':'OK!'})
            })
        })
    })
}