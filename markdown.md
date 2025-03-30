TODO
Create a repo
initialize the repo
mode modules, package.json, package-lock.json
install express
create a server
listen to port
write request handler for /test, /hello
install nodemon and update scripts inside package.json

what are dependencies
what is the use of "-g" while npm install
difference between caret and tilde(^ & ~)
initalize a git repo

diff between package.json and package-lock.json
play with routes and route extension ex. /hello, / , hello/2, /xyz
order of the route matter a lot

http method -- get, post, patch, delete
install postman and make a test api call

explore routing and use of ?, +, (), * in the routes
use of regex in routes /a/, /.*fly$/
reading query param in routes
reading the dynamic routes

create multiple route handler
next() funtion and error along with res.send();

what is middleware
how express js basically handles request behind the scene

write a dummy auth middleware for admin
write a dummy auth middleare for all user routes, except /user/login

create a free cluster in mongodb atlas
install mongoose
connect your app to the database "connection -url"/friendapp

call the connectDb function to databse before starting application on 3000

create a user schema & user Model

createpost /signup api to add data to database

push some document using api call

-database
-collection
-document
-field

episode 7

json vs js
add the expree.json middleware to app
make your signup api dynamics to receive data from the end user

user.findone with duplicate email ids. ehich object returned

api get user by email
api - feed api - get/feed - get all the users from the database
api - get user by id
create a delete user api
difference between patch and put
api - update a user
ecxplore the mongoose docs Model methods
what are options model.findoneupdate method explore more about it
api - update the user with emailid

Episode 8
Explore schema type options from the documentation
add require unique, lowercase, min, maxLength, trim
create a custome validate function for gender
improve the db schema put a appropriate validateions to each field
Add timestamp to user schema

Add Api level validation on patch request & sign post apo
data sanitization --add api validation for each field

install validator
Ecplore the validator library functions & use validatr func for password and email

Never trust req.body



episode 9



validate data in signup api
install bcrypt package
create passwordhash using bcrypt.hash & save the user is excrutped password

create login api
compare password and throw error if email or password is invalid

episode 10
install cookie parser
jsut send a dummy cookie to user
create get/ profile api and check if you get the cookie back
install json web token
in login api afte email and password create a jwt token and send it to user in cookies
read the cookie inside you profile API and find the logged in user
userAuth middleware
Add the userAuth middleware in profile API and a new sendConnectionsRequest API
Set the expiry of JW T token and cookies to 7 days

in banking app there are tokens

create userSchema method to getJWT()
create userSchema method to comparePassword(passwordInputByUser)





EPISODE 11
API LIST

authRouter
-post/signup
-post/logout


profileRouter
-get/profile/view
-patch/profile/edit
-patch/profile/password

ConnectionRequestRouter
-post/request/send/interested/:userId
-post/request/send/ignored/:requestId

userRouter
-get /user/connections
-get /user/requests/received
-get /user/feed - gets you profiles of other users on platform

status: ignore, interested, accepted, rejected

express.router()
explore tinder api
create a list all api under respective router
groutp multiple routes under respective routers

33.30


episode 12
create connection request schema
send connection request api
proper validation of data
$or query in mongoose $and query in mongoose
read more about index in mongodb
schema.pre function 
why we need index in db
what are thr advantage and disadvantage of creating index
reading the article about compound indexes


Episode 13

