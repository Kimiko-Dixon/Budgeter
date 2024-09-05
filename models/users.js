const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Users extends Model{
    isPassword(password){
        return (password === this.password)
    }
}

Users.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },
    {
        sequelize,
        underscored:true,
        freezeTableName:true,
        timestamps:false,
        modelName:'users',

    }
)

module.exports = Users