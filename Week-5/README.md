There are two types of programming styles

# Imperative programming 
   - programmer must explain or write each and everystep to the system to perform a particular task
   - Eg: to validate a simple form of 2 fields like name and email with a submit button, we need approx. 20 lines of code


# Declarative programming
   - No need of step by step explanation as the modern technology does the job
   - This can be done using react

   - Using react we can use single page applications

# data and state

- data never changes
- state changes over period of time (eventually) 
ex: a=10; 10 is data    ---- > later it can be changed to 20 also------> that is change in state


# NOTE
   - js makes changes to the real DOM that is in the browser which makes its performance to be low
   - whereas react makes a copy of real DOM in the main memory and makes changes to that which makes it to be very fast


# naming conventions for react aprojects
    - no capitals
    - use - instead of spaces

   - vite tool can be used



# Commands

- npm create vite@latest



# Handling Events

- calling non parameterized event handler
- calling parameterized event handler



# Use Effect

- Proper execution goes like

- Rendering------>display----->API req------->rerendering------>display

- use effect hook helps us to stop making the API req until the initial rendering is done
- the api is called only after the initial rendering is done
- after every api call it is rerendered again



# form validation and submissioh

- React --->lot of code needed...instead we can use libraries
- react-hook-form library  -  cmd: npm install react-hook-form
- formik library



# Routing

- Decide Root Layout
      Header
      Placeholder
      Footer

- Install react-router
      npm install react-router

- Configure routing (connect components with path)


# CORS

- Cross Origin Request Sharing
- data can be read with the endpoints
- npm install cors





# NOTE

- client side and server side apllicqtions can interact with each other over http protocol by making http request and re-saving http response

- to make the http req from client side application, one can use either fetch function or axious module

- the following are the http request types
        - GET -----> to read all resources
        - POST -----> to create new resource
        - PUT -----> to update entire resource
        - DELETE -----> to delete a resource
        -PATCH ------> to update a resource partially
- the POST,PUT and PATCH req types can have body property which can hold json data
- whereas GET and DELETE req do not have body property and they can send data through URL


# FETCH & AXIOS 
- no conversion needed in case of json in axios
- takes the json fresponse and keep it under data property
- less async functions than fetch
- it should be installed with node js

- Axios is better than fetch




# STATE MANAGEMENT

# sharing state + keeping state sync across the application
- can be done through 
       Context API -----> small apps
       Redux / Zustand -------> large apps


- sharing the state has a problem that is PROPS DRILLING ISSUE

- PROPS DRILLING ISSUE
            - pass the state from root until it reaches the last child (duplicate code if that state is not needed in any of the children in between)
            - Solutions : --> maintaining the global state (for large applications)
                      --> creating pipeline mechanism (for small and medium applications)

- PIPELINES MECHANISM -- using context
        - context provider is the state
        - context consumer is the individual component that takes the state from context provider
        - no need of parent component involvement

- HENCE>>>>>sharing state -------> using context




# STORING FILES IN MERN APP
     Client                                  Backend
   --------------------------------------------------------------------
                                                               
     JSON                                   req.body ---> DB 
     Binary data(files)                     req.file ---> DB (X)
     Binary data (fiels)                     3rd party cloud
                                               |
                                       return CDN link of the file(text)
                                               |
                                            store in DB
            (3rd party cloud ---> AWS, Clodinary )

 (DB that we are using is optimized for storig only text content not for the binary data....even if we store the binary data in the form of text format, it is a time taking process to convert all to 0s and 1s...Hence storing the binary data in the db is not right approach)


- CDN -----> content delivery network 
 