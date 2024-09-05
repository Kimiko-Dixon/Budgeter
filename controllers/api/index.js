const router = require('express').Router()

const userRoute = require('./user.js')
const budgetRoute = require('./budget.js')

router.use('/user',userRoute)
router.use('/budget',budgetRoute)

module.exports = router