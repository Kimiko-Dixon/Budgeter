const Users = require('./users')
const Budgets = require('./budgets')
const Expenses = require('./expenses')
// const ExpenseTypes = require('./expenseTypes')
const Payments = require('./payments')

Users.hasOne(Budgets,{
    foreignKey:'user_id'
})
Budgets.belongsTo(Users,{
    foreignKey:'user_id'
})

Budgets.hasMany(Expenses,{
    foreignKey:'budget_id'
})
Expenses.belongsTo(Budgets,{
    foreignKey:'budget_id'
})

Expenses.hasMany(Payments,{
    foreignKey:'expense_id'
})
Payments.belongsTo(Expenses,{
    foreignKey:'expense_id'
})

/* ExpenseTypes.hasMany(Expenses,{
    foreignKey:'type_id'
})
Expenses.belongsTo(ExpenseTypes,{
    foreignKey:'type_id'
}) */

module.exports = {Users,Budgets,Expenses,Payments}