const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Payments extends Model{}

Payments.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            unique:true
        },
        payment:{
            type:DataTypes.DECIMAL,
            allowNull:false,
        },
        expense_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'expenses',
                key:'id'
            }
        },
        user_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'users',
                key:'id'
            }
        },
        expense_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'expense',
                key:'id'
            }
        }
    },
    {
        sequelize,
        underscored:true,
        freezeTableName:true,
        timestamps:false,
        modelName:'payments',

    }
)

module.exports = Payments