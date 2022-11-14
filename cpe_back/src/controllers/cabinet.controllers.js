'use strict';


const Cabinet_controllers = require("../models/cabinet.model");

//selection tous les cabinet partie controllers

exports.selectionnerTousCabinet_controllers = function(request, response) 
{
	Cabinet_controllers.selectionnerTousCabinet(function(err, cabinet) {
		console.log("Controllers en bon etats");
		if(err)
			response.send(err);
		console.log("response selection cabinet => " , cabinet);
		response.send(cabinet);
	});
};


//ajout nouveau cabinet controllers

exports.ajouterUnNouveauCabinet_controllers = function(request, response)
{
	const nouveau_cabinet = new Cabinet_controllers(request.body);

	//check erreur en cas ou le champs est vide

	if(request.body.constructor === Object && Object.keys(request.body).length === 0)
	{
		response.status(400).send({error : true, message : "Quelle interet d'ajouter un cabinet sans nom ? "});
	}
	else
	{
		Cabinet_controllers.ajouterUnNouveauCabinet(nouveau_cabinet, function(err, cabinet){
			if (err)
				response.send(err);
			response.json({error: false, message: "nouveau Cabinet crée avec succes ! ", data:cabinet});
		});
	}
};