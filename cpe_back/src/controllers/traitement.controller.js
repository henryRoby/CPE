'use strict';


const Traitement_controllers = require("../models/traitement.model");

//selection tous les traitements partie controllers
exports.selectionnerToustraitement_controllers = function(request, response) 
{
	Traitement_controllers.selectionnerTousCabinet(function(err, traitements) {
		console.log("Controllers en bon etats");
		if(err)
			response.send(err);
		console.log("response selection cabinet => " , traitements);
		response.send(traitements);
	});
};


//ajout nouveau cabinet controllers

// exports.ajouterUnNouveauCabinet_controllers = function(request, response)
// {
// 	const nouveau_cabinet = new Cabinet_controllers(request.body);

// 	//check erreur en cas ou le champs est vide

// 	if(request.body.constructor === Object && Object.keys(request.body).length === 0)
// 	{
// 		response.status(400).send({error : true, message : "Quelle interet d'ajouter un cabinet sans nom ? "});
// 	}
// 	else
// 	{
// 		Cabinet_controllers.ajouterUnNouveauCabinet(nouveau_cabinet, function(err, cabinet){
// 			if (err)
// 				response.send(err);
// 			response.json({error: false, message: "nouveau Cabinet crée avec succes ! ", data:cabinet});
// 		});
// 	}
// };