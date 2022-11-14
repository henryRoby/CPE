'user strict';
var dbConn = require('../../config/db.config');

//Constructeur pour la creation du nouveau traitement
var Type_traitement = function(type_traitement){
    this.type     = type_traitement.type;
};

//la creation du nouveau traitement
Type_traitement.creer_des_traitement = function (newTrai, result) {    
    dbConn.query("INSERT INTO Type_traitement set ?", newTrai, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};


// Lister toutes les  traitement et requette Sql
Type_traitement.findAll = function (result) {
    dbConn.query("Select * from Type_traitement", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Type_traitement : ', res);  
            result(null, res);
        }
    });   
};

module.exports= Type_traitement;