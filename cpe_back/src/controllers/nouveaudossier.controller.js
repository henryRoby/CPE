
'use strict';
const Nouveaudossier = require('../models/nouveaudossier.model');
// creation de nouveau dossier
exports.creer_des_nouveaudossier = function(req, res) {
    const nouveau_dossier = new Nouveaudossier(req.body);

    //gère l'erreur nulle 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
      Nouveaudossier.creer_des_nouveaudossier(nouveau_dossier, function(err, dossiers) {
            if (err)
            res.send(err);
            res.json({error:false,message:"dossiers added successfully!",data:dossiers});
        });
    }
};

exports.findAll = function(req, res) {
    Nouveaudossier.findAll(function(err, dossiers) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', dossiers);
      res.send(dossiers);
    });
  };
  