const mongoose = require('mongoose')
const express= require('express')
const bcrypt = require('bcryptjs')
const User = require('./models/user.model')
const dbConfig = require('./config/db.config')
const constants = require('./utils/constants')
const {AuthRoutes, UserRoutes,TicketRoutes} = require('./routes/index.routes')

const app = express()
app.use(express.json())
app.use(AuthRoutes)
app.use(UserRoutes)
app.use(TicketRoutes)

async function init(){
    let user = await User.findOne({ userId: "admin"})

    if(user){
        console.log("Admin user already present",user)
        return
    }
try{
    let user = await User.create({
        name: "Sakib",
            userId: "admin",
            email: "admin@gmail.com",
            userType: "ADMIN",
            password: bcrypt.hashSync("Welcome1", 8),
            userStatus: constants.userStatus.approved
    })
    console.log(user)
}catch(err){
    console.log(err.message)
    }
}

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", () => console.log("ERROR while connecting to DB"))  //code for connecting mongodb
db.once("open", () => {console.log("Connected to mongoDB ")
})


app.listen(8000,()=> 
console.log('Running at localhost:8000'))



