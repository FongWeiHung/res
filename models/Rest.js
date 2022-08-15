"use strict";
//res table's get methods
class Rest{
    constructor(res_Id,restaurant_Name,restaurant_Info, restaurant_Address, restaurant_Category,restaurant_Time, restaurant_Location, restaurant_Thumb, restaurant_Site, restaurant_Emb,
        restaurant_Halal, restaurant_Alcohol){
        this.res_Id=res_Id;
        this.restaurant_Name=restaurant_Name;
        this.restaurant_Info=restaurant_Info;
        this.restaurant_Address=restaurant_Address;
        this.restaurant_Category=restaurant_Category;
        this.restaurant_Category=restaurant_Time;
        
        this.restaurant_Location=restaurant_Location;
        this.restaurant_Thumb=restaurant_Thumb;
        this.restaurant_Site=restaurant_Site;
        this.restaurant_Emb=restaurant_Emb;
        this.restaurant_Halal=restaurant_Halal
        this.restaurant_Alcohol=restaurant_Alcohol
    
        
    }
    //get
    getResId(){
        return this.res_Id;
    }
    getResName(){
        return this.restaurant_Name;
    }
    getResInfo(){
        return this.restaurant_Info;
    }
    getReview(){
        return this.review;
    }
    getResAdd(){
        return this.restaurant_Address;
    }
    getResCate(){
        return this.restaurant_Category;
    }
    getResTime(){
        return this.restaurant_Time;
    }
   
    getResLocate(){
        return this.restaurant_Location;
    }
    getResThumb(){
        return this.restaurant_Thumb;
    }
    getResSite(){
        return this.restaurant_Site;
    }
    getResEmb(){
        return this.restaurant_Emb;
    }
    getResH(){
        return this.restaurant_Halal
    }
    getResA(){
        return this.restaurant_Alcohol
    }
    


    //set
    setResId(res_Id){
        this.res_Id=res_Id;
    }
    setResName(restaurant_Name){
        this.restaurant_Name=restaurant_Name;
    }
    setResInfo(restaurant_Info){
        this.restaurant_Info=restaurant_Info;
    }

    setResAdd(username){
        this.username=username;
    }
    setDatePosted(restaurant_Address) {
        this.restaurant_Address = restaurant_Address;
    }
    setResCate(restaurant_Category){
        this.restaurant_Category=restaurant_Category;
    }
    setResTime(restaurant_Time){
        this.restaurant_Time=restaurant_Time;
    }
    
    setResLocate(restaurant_Location){
        this.restaurant_Location=restaurant_Location;
    }
    
    setResThumb(restaurant_Thumb){
        this.restaurant_Thumb=restaurant_Thumb;
    }
    setResSite(){
        this.restaurant_Site=restaurant_Site;
    }
    setResEmb(){
        this.restaurant_Emb=restaurant_Emb;
    }
    setResH(){
        this.restaurant_Halal=restaurant_Halal;
    }
    setResA(){
        this.restaurant_Alcohol=restaurant_Alcohol;
    }
 
}

module.exports = Rest;