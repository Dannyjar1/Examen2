var Eventos=require("../models/eventos");
    express=require("express");
    router=express.Router();

router.post('/crearEvento',(req,response)=>{
    var body=req.body;
    console.log(body);
     Eventos.insertMany({
      nombreEvento:body.nombreEvento,
      descripcion:body.descripcion,
      hora:body.hora,
      duracion:body.duracion,
      organizador:body.organizador,
      programa:body.programa,
      patrocinadores:body.patrocinadores,
      fecha:body.fecha,
      lugar:body.lugar,
      latitud:body.latitud,
      longitud:body.longitud,
      valor:body.valor,
      edadminima:body.edadminima,
      edadmaxima:body.edadmaxima,
      ciudad:body.ciudad
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
      })
      .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al guardar")
      });;

});


router.post('/editarEvento',(req,response)=>{
  var body=req.body;
  Eventos.updateOne({
    _id:body.id //decir que campo voy actualizar
  },{
    $set:{
      nombreEvento:body.nombreEvento,
      descripcion:body.descripcion,
      hora:body.hora,
      duracion:body.duracion,
      organizador:body.organizador,
      programa:body.programa,
      patrocinadores:body.patrocinadores,
      fecha:body.fecha,
      lugar:body.lugar,
      latitud:body.latitud,
      longitud:body.longitud,
      valor:body.valor,
      edadminima:body.edadminima,
      edadmaxima:body.edadmaxima,
      ciudad:body.ciudad
        
    }
  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos Actualizados");
  })
  .catch(function (err) {
    console.log(err);
    response.status(500).json("Ocurrio un error al guardar")
  });
});

router.post('/eliminarEvento',(req,response)=>{
  var body=req.body;
  Eventos.deleteOne({
    _id:body.id

  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos eliminados");
  })
  .catch(function (err) {
    console.log(err);
    response.status(500).json("Ocurrio un error al guardar")
  });
});






router.post('/editarEvento1',(req,response)=>{
  var body=req.body;
  Eventos.updateOne({
    nombreEvento:body.nombreEvento //decir que campo voy actualizar
  },{
    $set:{
      nombreEvento:body.nombreEvento,
      descripcion:body.descripcion,
      hora:body.hora,
      duracion:body.duracion,
      organizador:body.organizador,
      programa:body.programa,
      patrocinadores:body.patrocinadores,
      fecha:body.fecha,
      lugar:body.lugar,
      latitud:body.latitud,
      longitud:body.longitud,
      valor:body.valor,
      edadminima:body.edadminima,
      edadmaxima:body.edadmaxima,
      ciudad:body.ciudad
        
    }
  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos Actualizados");
  })
  .catch(function (err) {
    console.log(err);
    response.status(500).json("Ocurrio un error al guardar")
  });
});

router.post('/eliminarEvento1',(req,response)=>{
  var body=req.body;
  Eventos.deleteOne({
    nombreEvento:body.nombreEvento

  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos eliminados");
  })
  .catch(function (err) {
    console.log(err);
    response.status(500).json("Ocurrio un error al guardar")
  });
});




module.exports=router;