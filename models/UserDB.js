"use strict";

var db = require('../db-connections');
//const User = require('./User');
//const user_info = require('./User');
class UserDB{
    getAllUser(callback){
        var sql = "SELECT * from diner_finder.user";
        db.query(sql,callback);
    }
    
    addUser(User, callback){
        var sql = "INSERT INTO user (username, first_Name, last_Name, user_Email, user_Password,gender,number) VALUES (?,?,?,?,?,?,?)";
        db.query(sql,[User.getUsername(),User.getFirstName(),User.getLastName(), User.getUserEmail(),User.getUserPassword(), User.getGender(), User.getNumber()], callback);
    }

    updateUser(username, userEmail,userPass,number,picture, callback){
        var sql= "UPDATE user SET username = ?, user_Email = ?, user_Password = ?, number = ?,picture = ? WHERE username = ?"
        return db.query(sql,[username,userEmail,userPass,number,picture],callback);
   
    }

    userLogin(username, callback){    
        var sql = "SELECT user_Password from user WHERE username = ?";
        return db.query(sql,[username], callback);
    }
    deleteUser(userID, callback){
        var sql = "DELETE from user WHERE  _id = ?";
        db.query(sql,[userID], callback);
    }
    
}

module.exports = UserDB;
