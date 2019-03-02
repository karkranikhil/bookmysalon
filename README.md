## commands for development mode

    npm run dev
    

## A brief description of each package in server

* <b>bcryptjs: </b>used to hash passwords before we store them in our database
* <b>body-parser: </b>used to parse incoming request bodies in a middleware
* <b>concurrently: </b>allows us to run our backend and frontend concurrently and on different ports
* <b>express: </b>sits on top of Node to make the routing, request handling, and responding easier to write
* <b>is-empty: </b>global function that will come in handy when we use validator
* <b>jsonwebtoken: </b>used for authorization
* <b>mongoose: </b>used to interact with MongoDB
* <b>passport: </b>used to authenticate requests, which it does through an extensible set of plugins known as strategies
* <b>passport-jwt: </b>passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT
* <b>validator: </b>used to validate inputs (e.g. check for valid email format, confirming passwords match)
* <b>nodemon: </b>Nodemon is a utility that will monitor for any changes in your code and automatically restart your server, which is perfect for development. 

## A brief description of each package in frontend (client folder)

* <b>axios: </b>promise based HTTP client for making requests to our backend
* <b>classnames: </b>used for conditional classes in our JSX
* <b>jwt-decode: </b>used to decode our jwt so we can get user data from it
* <b>react-redux: </b>allows us to use Redux with React
* <b>react-router-dom: </b>used for routing purposes
* <b>redux: </b>used to manage state between components (can be used with React or any other view library)
* <b>redux-thunk: </b>middleware for Redux that allows us to directly access the dispatch method to make asynchronous calls from our actions
