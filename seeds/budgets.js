const {Budgets} = require('../models')
const budgetSeeds = () => Budgets.create({
    net_monthly_income:'5416.66',
    user_id:1
})
module.exports = budgetSeeds