"use strict";

class User{
    constructor(_id, username, first_Name, last_Name, user_Email, user_Password, gender, number){
        this._id=_id;
        this.username=username;
        this.first_Name=first_Name;
        this.last_Name=last_Name;
        this.user_Email=user_Email;
        this.user_Password=user_Password;
        this.gender=gender;
        this.number=number;
        
    }
    //get
    getId(){
        return this._id;
    }
    getUsername(){
        return this.username;
    }
    getFirstName(){
        return this.first_Name;
    }
    getLastName(){
        return this.last_Name;
    }
    getUserEmail(){
        return this.user_Email;
    }
    getUserPassword(){
        return this.user_Password;
    }
    getGender(){
        return this.gender;
    }
    getNumber(){
        return this.number;
    }

    //set
    setUsername(username){
        this.username=username;
    }
    setFirstName(first_Name){
        this.first_Name=first_Name;
    }
    setLastName(last_Name){
        this.last_Name=last_Name;
    }
    setUserEmail(user_Email){
        this.user_Email=user_Email;
    }
    setUserPassword(user_Password){
        this.user_Password=user_Password
    }
    setGender(gender) {
        this.gender = gender;
    }
    setNumber(number){
        this.number = number;
    }

 
}

module.exports = User;