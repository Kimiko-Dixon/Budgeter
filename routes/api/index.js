const router = require('express').Router()

const houseRoute = require('./house.js')
const groceryRoute = require('./grocery.js')
const carRoute = require('./car.js')
const retirementRoute = require('./retirement.js')
const miscellaneousRoute = require('./misc.js')

router.use('/house',houseRoute)
router.use('/grocery',groceryRoute)
router.use('/car', carRoute)
router.use('/retirement',retirementRoute)
router.use('/misc', miscellaneousRoute)


module.exports = router