const router = require('express').Router()

const userRoute = require('./user.js')

router.use('/user',userRoute)

module.exports = router