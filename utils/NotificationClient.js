
const Client = require('node-rest-client').Client

const client = new Client();

module.exports = (ticketId, subject, content, emailIds, requester) => {
    let reqBody = {
    "subject": subject,
    "ticketId": ticketId,
    "content": content,
    "recipientEmails": emailIds,
    "requester": requester
    }
    const args = {
        data: reqBody,
        headers: { "Content-Type": "application/json" }
    }

    client.post("http://localhost:8080/notifyService/api/notifications/",
        args,
        (data, response) => {
            console.log("Request sent")
            console.log(data)
        }
    )
}