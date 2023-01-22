const express = require('express')
const routes = express.Router()
const auth_jwt = require('../middleware/auth_jwt')
const userController = require('../controllers/user.controller')

routes.get('/CRM_App/api/v1/get/users/', [auth_jwt.verifyToken, auth_jwt.isAdmin], userController.FindAll )
routes.get('/CRM_App/api/v1/get/users/:userId', [auth_jwt.verifyToken, auth_jwt.isAdmin], userController.FindById )
routes.put('/CRM_App/api/v1/Update/users/:userId', [auth_jwt.verifyToken, auth_jwt.isAdmin], userController.UpdateUser )

module.exports ={
    UserRoutes:routes
    
}