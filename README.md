# CRM_App


## Problem Statement

 A system which would handle the complaints logged by the customer.
The complaints will be logged as a ticket and they will be fixed by the engineer. We need to manage this complete 
life-cycle using our application. 
Admin can keep track of the complete life cycle of the issue from logging of complaints as a ticket, fixing and updating 
the ticket

## Feature 1 : User Authentication Authorization APIs

Three kinds of users :
**Customer**
**Engineer**
**Admin**
- Engineer/Admin registration will be supported through API, but it needs to be approved by the ADMIN
- Customer registration will be supported through API with no approval needed from the ADMIN
- API to support the ADMIN login. Login API call should return the access token, which will be used to make all
 the other calls
- API to support the CUSTOMER login. Login API call should return the access token, which will be used to make
 all the other calls
- API to support the ENGINEER login. Login API call should return the access token, which will be used to make all
 the other calls.
- Login API will succeed only if the ENGINEER registration request has been approved by the ADMIN. Proper error
 message in the case ADMIN has yet not approved/rejected the registration request
 
 
 ## Feature 2 : Authenticating and Authorizing the User APIs

- API for getting the list of all users
- API for the getting the user based on User ID
- API for updating the user type and status
- Authenticating and Authorizing above APIs, so that only authenticated ADMIN will be allowed to perform 
the above operations
- ENGINEER/ADMIN user should be able to login successfully after the approval from ADMIN user


## Feature 3 : Ticket Creation
- API for the authenticated user to raise a request
- API for the authenticated user to update an existing request
- API for an authenticated user to check the status of the request
- API for an authenticated user to check the list of the all the requests raised so far
- API for the authenticated user to raise a request
- Registered Engineer if any should be assigned the ticket automatically


## Feature 4 : Ticket Manipulations and ADMIN capabilities
- API for authenticated Engineer to update the ticket
- Updated ticket should be visible to the customers immediately
- API for authenticated Engineer to search for the ticket
- API for authenticated Engineer to be able to accept a ticket
- API for authenticated Engineer to be able to see the complete list of tickets assigned to him/her
- API for the authenticated ADMIN to get the list of all the customers
- API for the authenticated ADMIN to get the list of all the issues
- API for the authenticated ADMIN to get the list of all the issues after applying certain filters
- API for the authenticated ADMIN to get the list of all the active issues
- API for the authenticated ADMIN to get the list of all the ENGINEER registration requests
- API for the authenticated ADMIN to Accept/reject the ENGINEER registration requests

## Feature 5 : Creation of the Notification Service
- API for raising the notification request
- API to get the result of the notification request
- Scheduled job to regularly check for any new request and then send email notifications
- to every one listed

You can get the code fot [Notification Service](https://github.com/Sakibdevlekar/notification).
 
 
