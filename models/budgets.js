const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Budgets extends Model{}

Budgets.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },
        net_monthly_income:{
            type:DataTypes.DECIMAL,
            allowNull:false,
        },
        user_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'users',
                key:'id'
            }
        }
    },
    {
        sequelize,
        underscored:true,
        freezeTableName:true,
        timestamps:false,
        modelName:'budgets',

    }
)

module.exports = Budgets