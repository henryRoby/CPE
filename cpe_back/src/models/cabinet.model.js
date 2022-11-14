'use strict';

var connection_bdd = require("../../Config/db.config");

var Cabinet = function(cabinet)
{
	this.nom_cabinet = cabinet.nom_cabinet;
};


// Selectionner tous les cabinet existant dans le base de donnée
Cabinet.selectionnerTousCabinet = function(resultat_obtenu)
{
	connection_bdd.query("SELECT * FROM cabinets", function(err, res){
		if(err)
		{
			console.log("erreur de selection: " , err);
			resultat_obtenu(null, err);
		}
		else
		{
			console.log("liste des cabinets: " , err);
			resultat_obtenu(null, res);
		}
	});
};


// Nouveau cabinet

Cabinet.ajouterUnNouveauCabinet = function(nouveau_cabinet, resultat)
{
	connection_bdd.query("INSERT INTO cabinets set ?", nouveau_cabinet, function(err, res){
		if (err) 
		{
			console.log("erreur d'insertion nouveau cabinet: ", err);
			resultat(err, null);
		} 
		else 
		{
			console.log("res.insertId = ", res.insertId);
			resultat(null, res.insertId);
		}
	});
};

module.exports = Cabinet;