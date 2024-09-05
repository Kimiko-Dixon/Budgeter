const sequelize = require('../config/connection.js')
const userSeeds = require('./user.js')
const expenseSeeds = require('./expenses.js')
const budgetSeeds = require('./budgets.js')

const seed = async () => {
    await sequelize.sync({force:true})
    await userSeeds()
    await budgetSeeds()
    await expenseSeeds()
    process.exit(0)
}

seed()