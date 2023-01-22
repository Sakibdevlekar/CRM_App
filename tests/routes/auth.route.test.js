const request = require('supertest')
const app = require("../../index")
const db = require("../db")

beforeAll(async () => await db.clearDataBase())
afterAll(async () => {
    await db.closeDatabase()
    app.close()
})

const api_endpoint = '/CRM_App/api/v1/'

const testPayload = {
    userType: "CUSTOMER",
    password: "12345678",
    name: "Test",
    userId: 2,
    email: "test@relevel.com",
    userStatus: "PENDING",
    ticketsCreated: [],
    ticketsAssigned: []
}

describe("Post signup endpoints", () => {
    it('should signUp', async () => {
        const res = await request(app)
            .post(api_endpoint + 'auth/signUp')
            .send(testPayload)
        expect(res.statusCode).toEqual(201)
        expect(res.body).toEqual(
            expect.objectContaining({
                'email': 'test@relevel.com',
                'name': "Test",
                'userId': '2',
                'userStatus': 'APPROVED',
                'userType': 'CUSTOMER'
            })
        )
    })
})

describe("Post signIn endpoints", () => {
    it('should signIn', async () => {
        const res = await request(app)
            .post(api_endpoint + 'auth/signIn')
            .send(testPayload)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(
            expect.objectContaining({
                'email': 'test@relevel.com',
                'name': "Test",
                'userId': '2',
                'userStatus': 'APPROVED',
                'userType': 'CUSTOMER'
            })
        )
    })
})