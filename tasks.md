- Create a repository
- Intialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a serve
- Listen to port
- write request handlers with some random names
- Install nodemon and update scripts inside package.json
- What are dependencies 
- What is the useof "-g" while npm install 
- Difference between caret and tilde (^ and ~)


- intialize git 
-  add node_modules to gitignore
- Create a remote repo on github 
- Push all code to remote origin
- Play with routes and route extensions ex. /hello , / , hello/2, /xyz
- Order of the routes matter a lot.
- Install Postman app and make a workspace/collection  -> test api call
- Write logic to handle GET, POST, PATCH, DELETE API Calls and test them on postman
- Explore routiong ex: use of ?, +, (), * in the routes
- Use of regex in routes /a/, /.*sly$/
- Reading the query params in the routes
- Reading the dynamic routes


- Multiple ROute handlers - Play with the code 
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2,rH3], rH4, rH5);
- What is middleware? Why do we need it
- How express Js basically handles requests behind the scences
- Difference between app.use and app.all 
- Writes a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, excepr /user/login
- Error handling using app.use app.use ('/', (err, req, res, next)=> {})

- Crerate a free cluster mongod official website (Mongo atlas)
- Install mongoose library
- Connect you app to the db ("connection-url"/devTinder)
- Call the connectDB function and connect to database before starting app on port
- Create useschema and model
- Create POST /singup API to add data to database.
- Push some documents using API calls from postman
- Error Handling while doing some db operations
