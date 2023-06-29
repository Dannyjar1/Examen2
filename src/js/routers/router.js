
const express=require('express'),
     router=express.Router(),
     asistentes=require('../controllers/asistentesController'),
     eventos=require('../controllers/eventosController'),
     trabajadores=require('../controllers/trabajadoresController.js');

router.use("/asistentes",asistentes);
router.use("/eventos",eventos);
router.use("/trabajadores",trabajadores);

module.exports = router;