const router = require('express').Router()
const {Budgets,Expenses,Payments} = require('../models')

router.get('/login',(req,res) => {
    res.render('login')
})
//homepage
router.get('/',async (req,res) => {
    try{
       /*  const budgetData = await Budgets.findOne({
            where:{
                user_id:req.session.user.id
            },
            include:[{model:Expenses}]
        })

        const budget = budgetData.map((data) => data.get({plain:true})) */

        res.render('homepage')
    }
    catch{

    }
    
})

module.exports = router