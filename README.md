## setup commands

    npm i bcryptjs body-parser concurrently express is-empty jsonwebtoken mongoose passport passport-jwt validator --save

    npm i -D nodemon

## A brief description of each package and the function it will serve

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