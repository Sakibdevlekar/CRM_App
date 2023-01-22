const express = require('express')
const routes = express.Router()
const authController = require('../controllers/auth.controller')



routes.post('/CRM_App/api/v1/auth/signUp',authController.signUp)
routes.post('/CRM_App/api/v1/auth/signIn', authController.signIn)

module.exports = {AuthRoutes : routes}