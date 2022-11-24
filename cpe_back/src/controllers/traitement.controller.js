'use strict';


const Traitement_controllers = require("../models/traitement.model");

//selection tous les traitements partie controllers
exports.selectionnerToustraitement_controllers = function(request, response) 
{
	Traitement_controllers.selectionnerToustraitement(function(err, traitements) {
		console.log("Controllers en bon etats");
		if(err)
			response.send(err);
		console.log("response selection cabinet => " , traitements);
		response.send(traitements);
	});
};





//ajout nouveau traitement controllers

exports.ajouterUnNouveauTraitement_controllers = function(request, response)
{
	const nouveau_traitement = new Traitement_controllers(request.body);

	//check erreur en cas ou le champs est vide

	if(request.body.constructor === Object && Object.keys(request.body).length === 0)
	{
		response.status(400).send({error : true, message : "Quelle interet d'ajouter un cabinet sans nom ? "});
	}
	else
	{
		Traitement_controllers.creernouveautraitement_controllers(nouveau_traitement, function(err, cabinet){
			if (err)
				response.send(err);
			response.json({error: false, message: "nouveau Cabinet crée avec succes ! ", data:cabinet});
		});
	}
};
