'use strict';


const Utilisateur_controllers = require("../models/utilisateur.model");

//selection tous les utilisateur partie controllers

exports.selectionnerTousUtilisateur_controllers = function(request, response) 
{
	Utilisateur_controllers.selectionnerTousUtilisateur(function(err, user) {
		console.log("Controllers en bon etats");
		if(err)
			response.send(err);
		console.log("response selection utilisateur => " , user);
		response.send(user);
	});
};



//ajout nouveau utilisateur controllers

exports.ajouterUnNouveauUtilisateur_controllers = function(request, response)
{
	const nouveau_utlisateur = new Utilisateur_controllers(request.body);

	//check erreur en cas ou le champs est vide

	if(request.body.constructor === Object && Object.keys(request.body).length === 0)
	{
		response.status(400).send({error : true, message : "Quelle interet d'ajouter un utilisateur sans nom ? "});
	}
	else
	{
		Utilisateur_controllers.creernouveauUtilisateur_controllers(nouveau_utlisateur, function(err, user){
			if (err)
				response.send(err);
			response.json({error: false, message: "nouveau utilisateur crée avec succes ! ", data:user});
		});
	}
};
