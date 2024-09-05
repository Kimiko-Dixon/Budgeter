const router = require('express').Router()
const {Budgets,Expenses,Payments} = require('../../models')

//Bulk add expenses
router.post('/expenses', async (req,res) => {
    try{
        const startingExpenses = Expenses.bulkCreate(
            {
                name:'Housing',
                cost:req.body.housing,
                budget_id:req.session.budget
            },
            {
                name:'Transportation',
                cost:req.body.transport,
                budget_id:req.session.budget
            },
            {
                name:'Medical',
                cost:req.body.med,
                budget_id:req.session.budget
            },
            {
                name:'Insurance',
                cost:req.body.insurance,
                budget_id:req.session.budget
            },
            {
                name:'Fun',
                cost:req.body.fun,
                budget_id:req.session.budget
            },
            {
                name:'Personal',
                cost:req.body.personal,
                budget_id:req.session.budget
            },
            {
                name:'Savings',
                cost:req.body.save,
                budget_id:req.session.budget
            },
            {
                name:'Food',
                cost:req.body.food,
                budget_id:req.session.budget
            },
            {
                name:'Utilities',
                cost:req.body.util,
                budget_id:req.session.budget
            },
            
        )
        res.status(200).json(startingExpenses)
    }
    catch{
        res.status(500).json('Failed to bulk create expenses')
    }
})

//get budget
router.get('/', async (req,res) => {
    try{
        const expenses = await Budgets.findOne({
            where:{
                user_id:req.session.user.id
            },
            include:[{model:Expenses}]
        })
        res.status(200).json(expenses)
    }
    catch{
        res.status(500).json('failed to add expense')
    }
})

//Add expense
router.post('/expense', async (req,res) => {
    try{
        const expense = Expenses.create(
            {
                name:req.body.name,
                cost:req.body.cost,
                budget_id:req.session.budget
            }
        )
        res.status(200).json(expense)
    }
    catch{
        res.status(500).json('failed to add expense')
    }
})
//Edit expense
router.put('/expense/:id', async (req,res) => {
    try{
        const expense = Expenses.update(
            {
                cost:req.body.cost,
            },
            {
                where:{
                    id:req.params.id
                }
            }
        )
        if(!expense[0]){
            res.status(404).json('Failed to find expense')
            return
        }

        res.status(200).json(expense)
    }
    catch{
        res.status(500).json('failed to update expense')
    }
})
//delete expense
router.delete('/expense/:id', async (req,res) => {
    try{
        const expense = Expenses.destroy(
            {
                where:{
                    id:req.params.id
                }
            }
        )
        if(!expense){
            res.status(404).json('Failed to find expense')
            return
        }
        res.status(200).json(expense)
    }
    catch{
        res.status(500).json('failed to delete expense')
    }
})

//Create budget
router.post('/', async (req,res) => {
    try{
        const budget = await Budgets.create({
            net_monthly_income:req.body.income,
            user_id:req.session.user.id
        })
        req.session.budget = budget.id
        res.status(200).json(budget)
    }
    catch{
        res.status(500).json('Failed to create budget')
    }
})
//Edit income
router.put('/income/:id', async (req,res) => {
    try{
        const budget = Budgets.update(
            {
                net_monthly_income:req.body.income,
            },
            {
                where:{
                    id:req.session.budget
                }
            }
        )
        if(!budget[0]){
            res.status(404).json('Failed to find budget')
            return
        }

        res.status(200).json(budget)
    }
    catch{
        res.status(500).json('failed to update budget')
    }
})
//Add payment
router.post('/:id/payment', async (req,res) => {
    try{
        const payment = await Payments.create({
            payment:req.body.payment,
            expense_id:req.params.id
        })
        res.status(200).json(payment)
    }
    catch{
        res.status(500).json('failed to add payment')
    }
})
module.exports = router