const router = require('express').Router()
const {Users} = require('../../models')

//signup
router.post('/signup', async (req,res) => {
    try{
        const signup = await Users.create({
            username:req.body.username,
            password:req.body.password
        })

        req.session.save(() => {
            req.session.loggedIn = true
            req.session.user = {
                username:signup.username,
                id: signup.id
            }
            res.status(200).json(signup) 
        })
        
    }
    catch{
        res.status(500).json('Failed to create signup')
    }
})
//login
router.post('/login',async (req,res) => {
    try{
        const user = await Users.findOne({
            where:{
                username:req.body.username
            }
        })
        if(!user){
            res.status(404).json('Username or passorword is incorrect')
            return
        }

        const isPassword = user.isPassword(req.body.password)

        if(!isPassword){
            res.status(404).json('Username or passorword is incorrect')
            return
        }

        req.session.save(() => {
            req.session.loggedIn = true
            req.session.user = {
                username:user.username,
                id: user.id
            }
            res.status(200).json(user)
        })
    }
    catch{
        res.status(500).json('Failed to login')
    }
})
//logout
router.post('/logout',async (req,res) => {
    if(req.session.loggedIn){
        req.session.destroy(() => res.status(204).end())
    }
    else{
        res.status(404).end()
    }
})
module.exports = router