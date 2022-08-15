"use strict";
const ResDB = require('../models/ResDB');


var resDB = new ResDB();

function getAllRes(request, respond){
    resDB.getAllRes(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function resSearch(request, respond) {
    var category = request.body.restaurant_Category
    var location = request.body.restaurant_Location
    resDB.resSearch(category,location, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result)
        }
    });
}

module.exports = {getAllRes,resSearch };
