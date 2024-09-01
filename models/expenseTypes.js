const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class ExpenseTypes extends Model{}

ExpenseTypes.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            unique:true
        },
        type:{
            type:DataTypes.STRING,
            // allowNull:false,
        }
    },
    {
        sequelize,
        underscored:true,
        freezeTableName:true,
        timestamps:false,
        modelName:'expense_types',

    }
)

module.exports = ExpenseTypes