const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Expenses extends Model{}

Expenses.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            unique:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        cost:{
            type:DataTypes.DECIMAL,
            allowNull:false,
        },
        type_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'expense_types',
                key:'id'
            }
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
        modelName:'expenses',

    }
)

module.exports = Expenses