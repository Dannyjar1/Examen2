var mongoose=require('mongoose');
Schema=mongoose.Schema;

var asistentesSchema= new mongoose.Schema({
    nombres:String,
    apellidos:String,
    edad:Number,
    genero:String,
    telefono:String,
    cedula:String,
    correo:String
});
var asistente=mongoose.model('asistentes',asistentesSchema);
module.exports=asistente;