'use strict';

const Type_traitement = require('../models/typetraitement.model');


// creation de nouveau traitement
exports.creer_des_traitement = function(req, res) {
    const nouveau_traitement = new Type_traitement(req.body);

    //gère l'erreur nulle 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
      Type_traitement.creer_des_traitement(nouveau_traitement, function(err, type_traitement) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Traitement added successfully!",data:type_traitement});
        });
    }
};


// Lister toutes les  traitement
exports.findAll = function(req, res) {
  Type_traitement.findAll(function(err, type_traitement) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', type_traitement);
    res.send(type_traitement);
  });
};


// Supprimer une traitement par ID
// exports.delete = function(req, res) {
//   Type_traitement.delete( req.params.id, function(err, employee) {
//     if (err)
//     res.send(err);
//     res.json({ error:false, message: 'Employee successfully deleted' });
//   });
// };