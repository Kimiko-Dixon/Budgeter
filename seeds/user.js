const {Users} = require('../models')
const userSeeds = () => Users.create({
    username:'test',
    password:'test'
})
module.exports = userSeeds