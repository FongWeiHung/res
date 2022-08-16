var express = require("express");
var userController = require('./controllers/userController');
var resController = require('./controllers/resController');
var reviewController = require('./controllers/reviewController');
const UserDB = require("./models/UserDB");
var app = express();

app.use(express.static("./public"));//request for html goes through public
app.use(express.json());

//app.route('/oneuser/').post(userController.getUser);
app.route('/user').get(userController.getAllUser); //working
app.route('/user').post(userController.addUser);//Works, commented out the problem
app.route('/login').post(userController.userLogin);//working
app.route('/user/:id').delete(userController.deleteUser);//working
//app.route('/user/').put(userController.updateUser);//Update with username, email, password, number, picture

app.route('/res').get(resController.getAllRes);//Get all restaurants, working

app.route('/resSearch').post(resController.resSearch);//Search for restaurants, working


app.route('/review').get(reviewController.getAllReview)//Get all reviews, working
app.route('/review').post(reviewController.addReview);//requires user's id, working
app.route('/review/:id').put(reviewController.updateReview)// value goes into wrong columns 


app.route('/review/:id').delete(reviewController.deleteReview);//working

app.listen(3000, ()=> console.log("web server running @ http://127.0.0.1:3000"));
