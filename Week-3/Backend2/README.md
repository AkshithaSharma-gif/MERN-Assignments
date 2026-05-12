1. generate package.json - npm init -y

2. create express server - npm install express

3. install mongoose and connect to mongodb server
it is a (Object document mapping) ODM tool that connects to the database 

               RESTAPI



4. Build USER REST API  (here user is the resource)
                 -create user
                 -read users
                 -update
                 -delete

5. create schema and model of the resource
(schema is the structure of thr doc.)

6. define the routes





--> handling unavailable resources



-->validators during update
    validators on;ly work while the creation but not during updation



--> Hasing the password
    hashing is not reversible which makes it more secure
    hashing can be done by (bcryptjs) module - npm install bcryptjs



--> unique fields of a document
    names and emails should not be same always
    can be done through unique:[true,""]
    unique is not a validator
    it can only be applied on empty collection



-->refined version of error handling middlewares







## STATUS CODES
     * 200 -> Any operation that is successful has a status code 200         -|__success status codes
     * 201 -> Creation resource is successfull                               -|  

     * 400 -> bad request (Client error)              \
     * 401 -> unauthorized resource                   /---- client side issues
     * 404 -> resource not found                      \
 
     * 500 -> Server error


HANDLING ERRORS IN API

automatic error handling is done in express 5 edition

but we can define a error handling middleware in the server.js







### USER Authentication
Submit credentials and get token

Routes are of 2 types
        - public routes
        - protected routes

- by default every route is a public route


           req------------------->public route
           req---->middleware---->protected route












---given token should be saved in the browser temporarily 
either in ram or local storage or session storage cookies

* if browser is refreshed the storage in ram is gone

* two poular attacks possible when we store data in local storage or session storage of the browser
XSS
CSRM

* but when we store in cookies with http only(enabled) the browser cannot read the data








# Nested Document




# Reference document