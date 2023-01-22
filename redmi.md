# we start project with 

- npm init

# install require packages

- npm i express 
- npm i mongoose         // this package for connecting to mongo db(basically it is like sequelize )
- npm i bcryptjs        // this package for encrypting & decrypting password
- npm i jsonwebtoken   // this package for authentication


# creating the folder structure

- Here we follow MVC architecture

# then we create model and there schema 



# API's with there test body 

- test the api's in postman app or any api testing with there,
  respective body data.

# user singUP API

localhost:8000/CRM_App/api/v1/auth/signUp

{
    "name":"SD",
    "userId": "1",
    "email": "sd@gmail.com",
    "userType": "CUSTOMER",
    "password":"12345678"

}


# user singIN API
 localhost:8000/CRM_App/api/v1/auth/signIn

 {
    "userId": "3",
    "password":"12345688"
}

# get API with multiple function if user is admin

This API find all

localhost:8000/CRM_App/api/v1/get/users


This API findByName

localhost:8000/CRM_App/api/v1/get/users/?name=AK

This API fetchByUserType

localhost:8000/CRM_App/api/v1/get/users/?userType=ADMIN

This API fetchByTypeAndStatus

localhost:8000/CRM_App/api/v1/get/users/?userType=CUSTOMER&userstatus=approved



This API fetchByStatus

localhost:8000/CRM_App/api/v1/get/users/?userstatus=APPROVED



# Get user by Id


localhost:8000/CRM_App/api/v1/get/users/1

# update userStatus

localhost:8000/CRM_App/api/v1/Update/users/sd46

{
     "userStatus": "APPROVED"
}

# create Ticket API

localhost:8000/CRM_App/api/v1/create/Ticket/

{
    
    "title": "1st ticket",
    "ticketPriority":2,
    "description": "voice not coming properly",
    "status":"OPEN"
}

# Update ticket API 
here need a id :63abb323a8e646ffe8652a40  passed in params it generated 
while time of ticket  creation 

localhost:8000/CRM_App/api/v1/Update/Ticket/63abb323a8e646ffe8652a40   


you can update (title,ticketPriority,description)

{
    "title": "1st ticket Updated"
}

# Get all ticket API

Use cases:
*  - ADMIN : should get the list of all the tickets
*  - CUSTOMER : should get all the tickets created by him/her
*  - ENGINEER : should get all the tickets assigned to him/her

NOTE: ypu need to provide x-access-token
localhost:8000/CRM_App/api/v1/Get_All/Ticket/?x-access-token=

* using this api you can get closed ticket
localhost:8000/CRM_App/api/v1/Get_All/Ticket/?status=CLOSED