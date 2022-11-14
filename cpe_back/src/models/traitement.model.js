'user strict';
var dbConn = require('../../config/db.config');

//Constructeur pour la creation du nouveau traitement
var Traitement = function(traitements){
    this.type     = traitements.type;
};

// Lister toutes les  traitement et requette Sql
Traitement.findAll = function (result) {
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
// Traitement.creer_des_traitement = function (newTrai, result) {    
//     dbConn.query("INSERT INTO traitements set ?", newTrai, function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else{
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     });           
// };



module.exports= Traitement;