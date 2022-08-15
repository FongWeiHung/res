"use strict";
//review table's get methods
class Review{
    constructor(rev_Id,resRevId,resName, review,username, rating, datePosted,){
        this.rev_Id=rev_Id;
        this.resRevId=resRevId;
        this.resName=resName;
        this.review=review;
        this.username=username;
        this.rating=rating;  
        this.datePosted=datePosted;
        
    }
    //get
    getRevId(){
        return this.rev_Id;
    }
    getresRevId(){
        return this.resRevId;
    }
    getResName(){
        return this.resName;
    }
    getUsername(){
        return this.username;
    }
    getReview(){
        return this.review;
    }
    getRating(){
        return this.rating;
    }
   
    getDatePosted(){
        return this.datePosted;
    }


    //set
    setresRevId(){
        this.resRevId =resRevId;
    }
    setResName(){
        this.resName = resName;
    }
    setUsername(username){
        this.username=username;
    }
    
    setReview(review){
        this.review=review;
    }

    setRating(){
        this.rating = rating;
    }
    setDatePosted(datePosted) {
        this.datePosted = datePosted;
    }
    

 
}

module.exports = Review;