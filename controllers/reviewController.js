"use strict";
const ReviewDB = require('../models/ReviewDB');
const Review = require('../models/Review');

var reviewDB = new ReviewDB();

function getAllReview(request, respond){
    reviewDB.getAllReview(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function addReview(request, respond){
    var now = new Date();
    var review = new Review(null, request.body.resRevId,request.body.resName, request.body.review,request.body.username, request.body.rating,  now.toString());
    reviewDB.addReview(review, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    })
    
}
function updateReview(request,respond){
    var now = new Date();
    var review = new Review(parseInt(request.params.id),request.body.resRevId, request.body.resName, request.body.review,request.body.username, request.body.rating, now.toString());
    reviewDB.updateReview(review, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    });
    
}

function deleteReview(request,respond){
    var reviewID = request.params.id;
    reviewDB.deleteReview(reviewID, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }

    });
    
}
    


module.exports = {getAllReview, addReview, updateReview, deleteReview};