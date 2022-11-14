const express = require('express')
const router = express.Router()
const typetraitementController = require('../controllers/typetraitement.controller');
const creerdesnouveaudossierController = require('../controllers/nouveaudossier.controller');
const Cabinet_dans_controllers = require('../controllers/cabinet.controllers');


// Creer une nouveau traitement
router.post('/typetraitement', typetraitementController.creer_des_traitement);
// Lister toutes les  traitement
router.get('/typetraitement', typetraitementController.findAll);
// Supprimer une traitement par ID
//router.delete('/:id', typetraitementController.delete);

// creer des nouveau cabinet
router.get('/cabinet', Cabinet_dans_controllers.selectionnerTousCabinet_controllers);
router.post('/cabinet', Cabinet_dans_controllers.ajouterUnNouveauCabinet_controllers);


//Creer une nouveau dossier
router.post('/dossier', creerdesnouveaudossierController.creer_des_nouveaudossier);
router.get('/dossier', creerdesnouveaudossierController.findAll);



//Creer une nouveau traitement
// router.post('/traitements', creerdesnouveaudossierController.creer_nouveautraitement);
router.get('/traitements', creerdesnouveaudossierController.findAll);



//
module.exports = router