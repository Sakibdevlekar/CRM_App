const express = require('express')
const routes = express.Router()
const auth_jwt = require('../middleware/auth_jwt')
const ticketController = require('../controllers/ticket.controller')


routes.post('/CRM_App/api/v1/create/Ticket/', [auth_jwt.verifyToken], ticketController.createTicket)
routes.put('/CRM_App/api/v1/Update/Ticket/:id', [auth_jwt.verifyToken], ticketController.updateTicket)
routes.get('/CRM_App/api/v1/Get_All/Ticket/', [auth_jwt.verifyToken], ticketController.getAllTickets)
routes.get('/CRM_App/api/v1/getOneTicket/:id', [auth_jwt.verifyToken], ticketController.getOneTicket)
module.exports ={
    TicketRoutes:routes
}