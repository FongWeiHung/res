"use strict";
const UserDB = require('../models/UserDB');
const User = require('../models/User');
const bcrypt = require('bcrypt');
var userDB = new UserDB();
//var user = new User();
var jwt = require('jsonwebtoken');
const res = require('express/lib/response');
var secret ="somesecretkey"

function getAllUser(request, respond){
    userDB.getAllUser(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function userLogin(request,respond){
    var username = request.body.username;
    var user_Password= request.body.user_Password;
    userDB.userLogin(username, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            const hash = result[0].user_Password
            var flag = bcrypt.compareSync(user_Password,hash)
            if (flag) {
                var token = jwt.sign(username, secret);
                respond.json({result:token});
            } else {
                respond.json({result:user_Password});  
            }
                      
        }
    });
} 




function addUser(request, respond){
    var user = new User(null, request.body.username, request.body.first_Name, request.body.last_Name, 
    request.body.user_Email,request.body.user_Password = bcrypt.hashSync(request.body.user_Password,5), request.body.gender, request.body.number);
    userDB.addUser(user, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    })


}

function deleteUser(request,respond){
    var User = request.params.id;
    userDB.deleteUser(User, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    });
    
}



//module.exports = {getAllUser, getUser,userLogin, addUser, deleteUser, updateUser};
module.exports = {getAllUser,userLogin,addUser,deleteUser};
