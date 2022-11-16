const {Router} = require('express')
const route = Router()
const AdminControllers = require('../adminControllers/AdminControllers')

route.post('/Admin', AdminControllers.Checkin)

module.exports = route