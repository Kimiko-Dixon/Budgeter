const Users = require('./users')
const Expenses = require('./expenses')
const ExpenseTypes = require('./expenseTypes')
const Payments = require('./payments')

Users.hasMany(Expenses,{
    foreignKey:'user_id'
})
Expenses.belongsTo(Users,{
    foreignKey:'user_id'
})

Users.hasMany(Payments,{
    foreignKey:'user_id'
})
Payments.belongsTo(Users,{
    foreignKey:'user_id'
})

Expenses.hasMany(Payments,{
    foreignKey:'expense_id'
})
Payments.belongsTo(Expenses,{
    foreignKey:'expense_id'
})

ExpenseTypes.hasMany(Expenses,{
    foreignKey:'type_id'
})
Expenses.belongsTo(ExpenseTypes,{
    foreignKey:'type_id'
})

module.exports = {Users,Expenses,ExpenseTypes,Payments}