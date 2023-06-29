var Trabajadores=require("../models/trabajadores");
    express=require("express");
    router=express.Router();

router.post('/crearTrabajador',(req,response)=>{
    var body=req.body;
    console.log(body);
     Trabajadores.insertMany({
        
        nombreTrabajador:body.nombreTrabajador,
        cedula:body.cedula,
        puesto:body.puesto,
        telefono:body.telefono,
        horario:body.horario,
        salario:body.salario
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
      })
      .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al guardar")
      });;

});





router.post('/editarTrabajador',(req,response)=>{
  var body=req.body;
  Trabajadores.updateOne({
    _id:body.id //decir que campo voy actualizar
  },{
    $set:{
      nombreTrabajador:body.nombreTrabajador,
      cedula:body.cedula,
      puesto:body.puesto,
      telefono:body.telefono,
      horario:body.horario,
      salario:body.salario
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

router.post('/eliminarTrabajador',(req,response)=>{
  var body=req.body;
  Trabajadores.deleteOne({
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





router.post('/editarTrabajador1',(req,response)=>{
  var body=req.body;
  Trabajadores.updateOne({
    nombreTrabajador:body.nombreTrabajador //decir que campo voy actualizar
  },{
    $set:{
      nombreTrabajador:body.nombreTrabajador,
      cedula:body.cedula,
      puesto:body.puesto,
      telefono:body.telefono,
      horario:body.horario,
      salario:body.salario
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

router.post('/eliminarTrabajador1',(req,response)=>{
  var body=req.body;
  Trabajadores.deleteOne({
    nombreTrabajador:body.nombreTrabajador

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