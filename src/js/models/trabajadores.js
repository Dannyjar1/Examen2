var mongoose= require('mongoose');

Schema=mongoose.Schema;

var trabajadoresSchema= new mongoose.Schema({
   nombreTrabajador:String,
   cedula:String,
   puesto:String,
   telefono:Number,
   horario:String,
   salario:String
});
var trabajadores=mongoose.model('trabajadores',trabajadoresSchema);
module.exports=trabajadores;