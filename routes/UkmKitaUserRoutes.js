const UserModels = require('../models/UkmKitaUserModels').UserModels
module.exports=(app)=> {

    app.get('/ukmkita/user', (req, res)=> {
        UserModels.find({}, (err, user)=> {
            if(err)
            return res.send(err)
            res.json(user)
        })
    })

    app.get('/ukmkita/user/:id', (req, res)=> {
        UserModels.find({'_id':req.params.id}, (err, user)=> {
            if(err)
            return res.send(err)
            res.json(user)
        })
    })

    app.post('/ukmkita/user/add', (req, res)=> {
        const user = new UserModels()
        user.user_name=req.body.user_name
        user.pass_user=req.body.pass_user
        user.email_user=req.body.email_user
        user.addr_user=req.body.addr_user

        console.log(req.body.user_name)
        user.save((err, user)=> {
            if(err)
            return res.send(err)
            res.json({'status':'user added', data:user})
        })
    })

    app.put('/ukmkita/user/edit/', (req, res)=> {
        UserModels.findOne({user_name: req.body.user_name}, (err, user)=> {
            if(err)
            return res.send(err)
            user.user_name=req.body.user_name
            user.pass_user=req.body.pass_user
            user.email_user=req.body.email_user
            user.addr_user=req.body.addr_user

            user.save((err, user)=> {
                if(err)
                return res.send(err)
                res.json({'status':'OK!', data:user})
            })
        })
    })

    app.delete('/ukmkita/user/delete/:id', (req, res)=> {
        UserModels.findById(req.params.id, (err, user)=> {
            if(err)
            return res.send(err)
            user.remove((err)=> {
                if(err)
                return res.send(err)
                res.json({'status':'OK!'})
            })
        })
    })
}