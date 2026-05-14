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

# Context API
      - Create context object( pipeline )
      - Provide or add state to contextObject
      - Provide this or set this context provider to the parent
      - consume context from components

# issues with context
     - Context with use state hook is a best and simple state management mechanism for small applications but it creates unneccessary        rerendering issues when multiple state is part of a context
     - To overcome this unneccesary rerendering issue create multiple contexts and make sure each context have a single state
     - When the application is huge then the maintainance of multiple contexts becomes an issue
     - for suvh large applications advanced state management tools like Redux or Zustand can be used 




# ZUSTAND
    - install zustand library
    - create a global store and keep the swtate and functions that modify the state in that store

