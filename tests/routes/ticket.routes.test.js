const request = require('supertest')

const User = require('../../models/user.model')
const app = require('../../index')
const jwt = require('jsonwebtoken')
const config = require("../../config/auth.config")
const client = require("../../utils/NotificationClient").client

const db = require("../db")

beforeAll(async () => {
    await db.clearDataBase()
    await User.create({
        name: "Anshul",
        userId: "1",
        email: "anshul@gmail.com",
        userType: "ENGINEER",
        password: "Welcome1",
        userStatus: 'APPROVED'
    })
})

afterAll(async () => {
    await db.closeDatabase()
    app.close()
})

const api_endpoint = '/CRM_App/api/v1/'

const ticketTestPayload = {
    title: "Test",
    ticketPriority: 4,
    description: "Test",
    status: "OPEN",
    assignee: '1'
}

let ticketId

describe("Post Tickets Endpoints", () => {
    let clientSpy = jest.spyOn(client, 'post')
        .mockImplementation((url, args, cb) => cb("Test", null))

    let token = jwt.sign({ userId: 1 }, config.secret, {
        expiresIn: 120
    })

    it('should create', async () => {
        const res = await request(app)
            .post(api_endpoint + "create/ticket")
            .set('x-access-token', token)
            .send(ticketTestPayload)
        ticketId = res.body.id
        expect(clientSpy).toHaveBeenCalled()
        expect(res.status).toEqual(201)
        expect(res.body).toEqual(
            expect.objectContaining({
                'assignee': '1',
                'description': "Test",
                'reporter': '1',
                'status': "OPEN",
                'ticketPriority': "4",
                'title': "Test"
            })
        )
    })
})

describe("Put Tickets Endpoints", () => {
    let clientSpy = jest.spyOn(client, 'post')
        .mockImplementation((url, args, cb) => cb("Test", null))

    let token = jwt.sign({ userId: 1 }, config.secret, {
        expiresIn: 120
    })

    it('should update', async () => {
        const res = await request(app)
            .put(api_endpoint + 'Update/Ticket/' + ticketId)
            .set('x-access-token', token)
            .send(ticketTestPayload)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(
            expect.objectContaining({
                'assignee': '1',
                'description': 'Test',
                'reporter': '1',
                'status': 'OPEN',
                'ticketPriority': '4',
                'title': 'Test'
            })
        )
    })
})

describe('Get All Tickets Endpoints', () => {
    jest.spyOn(client, 'post')
        .mockImplementation((url, args, cb) => cb("Test", null))

    let token = jwt.sign({ userId: 1 }, config.secret, {
        expiresIn: 120
    })

    it("should get all", async () => {
        const res = await request(app)
            .get(api_endpoint + "Get_All/Ticket/")
            .set('x-access-token', token)
        ticketId = res.body[0].id
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    'assignee': '1',
                    'description': "Test",
                    'reporter': '1',
                    'status': 'OPEN',
                    'ticketPriority': '4',
                    'title': 'Test'
                })
            ])
        )
    })
})

describe('Get One Ticket Endpoints', () => {
    jest.spyOn(client, 'post')
        .mockImplementation((url, args, cb) => cb("Test", null))

    let token = jwt.sign({ userId: 1 }, config.secret, {
        expiresIn: 120
    })

    it("should get one", async () => {
        const res = await request(app)
            .get(api_endpoint + "getOneTicket/" + ticketId)
            .set('x-access-token', token)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(
            expect.objectContaining({
                'assignee': '1',
                'description': "Test",
                'reporter': '1',
                'status': 'OPEN',
                'ticketPriority': '4',
                'title': 'Test'
            })
        )
    })
})