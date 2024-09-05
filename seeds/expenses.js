const {Expenses} = require('../models')

const expenses = [
    {
        name:'Housing',
        cost:'1500.00',
        budget_id:1
    },
    {
        name:'Transportation',
        cost:'706.60',
        budget_id:1
    },
    {
        name:'Medical',
        cost:'458.58',
        budget_id:1
    },
    {
        name:'Insurance',
        cost:'458.58',
        budget_id:1
    },
    {
        name:'Fun',
        cost:'458.58',
        budget_id:1
    },
    {
        name:'Personal',
        cost:'458.58',
        budget_id:1
    },
    {
        name:'Savings',
        cost:'458.58',
        budget_id:1
    },
    {
        name:'Food',
        cost:'458.58',
        budget_id:1
    },
    {
        name:'Utilities',
        cost:'458.58',
        budget_id:1
    },
]

const expenseSeeds = () => Expenses.bulkCreate(expenses)
module.exports = expenseSeeds