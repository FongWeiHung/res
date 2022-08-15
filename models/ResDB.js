"use strict"

var db = require('../db-connections');
class ResDB{
    getAllRes(callback){
        var sql = "SELECT * from diner_finder.restaurant";
        db.query(sql,callback);
    }
   
    resSearch(category, location, callback){
        var sql = "SELECT restaurant_Name FROM diner_finder.restaurant WHERE restaurant_Category =? OR restaurant_Location = ?";
        return db.query(sql, [category, location],  callback);
    }
    

}


module.exports = ResDB;
