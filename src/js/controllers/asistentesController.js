var Asistentes=require("../models/asistentes");
    express=require("express");
    router=express.Router();

router.post('/crearAsistente',(req,response)=>{
    var body=req.body;
    console.log(body);
     Asistentes.insertMany({
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        genero:body.genero,
        telefono:body.tel,
        cedula:body.cedula,
        correo:body.correo
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
      })
      .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al guardar")
      });;

});



router.post('/editarAsistente',(req,response)=>{
  var body=req.body;
  Asistentes.updateOne({
    _id:body.id //decir que campo voy actualizar
  },{
    $set:{
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        genero:body.genero,
        telefono:body.tel,
        cedula:body.cedula,
        correo:body.correo
        
        
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

router.post('/eliminarAsistente',(req,response)=>{
  var body=req.body;
  Asistentes.deleteOne({
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






router.post('/editarAsistente1',(req,response)=>{
  var body=req.body;
  Asistentes.updateOne({
    nombres:body.nombres //decir que campo voy actualizar
  },{
    $set:{
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        genero:body.genero,
        telefono:body.tel,
        cedula:body.cedula,
        correo:body.correo
        
        
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

router.post('/eliminarAsistente1',(req,response)=>{
  var body=req.body;
  Asistentes.deleteOne({
    nombres:body.nombres

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