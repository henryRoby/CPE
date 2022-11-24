'user strict';
var dbConn = require('../../config/db.config');

//Constructeur pour la creation du nouveau utilisateur
var Utilisateur = function(utilisateur){
    this.email       = utilisateur.email ;
    this.roles      = utilisateur.roles;
    this.password      = utilisateur.password;
    this.first_name     = utilisateur.first_name;
    this.last_name      = utilisateur.last_name;

};

// Selectionner tous les cabinet existant dans le base de donnée
Utilisateur.selectionnerTousUtilisateur = function(resultat_obtenu)
{
	dbConn.query("SELECT * FROM user", function(err, res){
		if(err)
		{
			console.log("erreur de selection: " , err);
			resultat_obtenu(null, err);
		}
		else
		{
			console.log("liste des utilisateur: " , err);
			resultat_obtenu(null, res);
		}
	});
};



//la creation du nouveau traitement
Utilisateur.creernouveauUtilisateur_controllers = function (newTrai, result) {    
    dbConn.query("INSERT INTO user set ?", newTrai, function (err, res) {
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

module.exports = Utilisateur;