"use strict";

var db = require('../db-connections');
class ReviewDB{
    getAllReview(callback){
        var sql = "SELECT * from diner_finder.review";
        db.query(sql,callback);
    }

    addReview(review,callback){
        var sql = "INSERT INTO review (resRevId, res_Name, username,review, rating, datePosted) VALUES(?,?,?,?,?,?)";
        db.query(sql,[review.getresRevId(),review.getResName(),review.getUsername(),review.getReview(),review.getRating(),review.getDatePosted()], callback);
    }//username = ?, user_Id = ?,

    updateReview(review, callback){
        var sql = "UPDATE review SET username = ?, review = ?, rating = ?,  datePosted=? WHERE rev_Id = ? ";
        return db.query(sql,[ review.getUsername(),review.getReview(), review.getRating(),review.getDatePosted(),
        review.getRevId()], callback);
    }
    
    deleteReview(reviewID, callback){
        var sql = "DELETE from review WHERE  rev_Id = ?";
        db.query(sql,[reviewID], callback);
    }

}

module.exports = ReviewDB;
