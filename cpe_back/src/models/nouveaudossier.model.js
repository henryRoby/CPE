'user strict';
var dbConn = require('../../config/db.config');

//Constructeur pour la creation du nouveau dossier
var Nouveaudossier = function(dossiers){
    this.nom_cabinet_id     = dossiers.nom_cabinet_id;
    this.nom_dossier     = dossiers.nom_dossier;
};

//la creation du nouveau dossier
Nouveaudossier.creer_des_nouveaudossier = function (newTrai, result) {    
    dbConn.query("INSERT INTO dossiers set ?", newTrai, function (err, res) {
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
Nouveaudossier.findAll = function (result) {
    dbConn.query("Select * from dossiers", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('dossiers : ', res);  
            result(null, res);
        }
    });   
};

module.exports= Nouveaudossier;