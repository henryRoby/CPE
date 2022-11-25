'user strict';
var dbConn = require('../../config/db.config');

//Constructeur pour la creation du nouveau traitement
var Traitement = function(traitements){
    this.nom_cabinet_id      = traitements.nom_cabinet_id;
    this.nom_dossier_id      = traitements.nom_dossier_id;
    this.type_id      = traitements.type_id;
    this.date_traitement     = traitements.date_traitement;
    this.heure_debut_traitement      = traitements.heure_debut_traitement;
    this.heure_fin_traitement     = traitements.heure_fin_traitement;
    this.nombre_ligne     = traitements.nombre_ligne;
    this.first_name_id      = traitements.first_name_id;
};

// Lister toutes les  traitement et requette Sql
Traitement.selectionnerToustraitement = function (result) {
    dbConn.query("Select * from traitements", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('traitements : ', res);  
            result(null, res);
        }
    });   
};



//la creation du nouveau traitement
Traitement.creernouveautraitement_controllers = function (newTrai, result) {    
    dbConn.query("INSERT INTO traitements set ?", newTrai, function (err, res) {
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


Traitement.findByDate = function (date_traitement, result) {
    dbConn.query("Select * from traitements where date_traitement=?", date_traitement, function (err, res) {
    if(err) {
        console.log("manin ato ary za zany leh ");
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

module.exports= Traitement;