 var mongoose= require('mongoose');

Schema=mongoose.Schema;

var eventosSchema= new mongoose.Schema({
   nombreEvento:String,
   descripcion:String,
   hora:String,
   duracion:String,
   organizador:String,
   programa:String,
   patrocinadores:String,
   capacidad:Number,
   fecha:String,
   lugar:String,
   latitud:Number,
   longitud:Number,
   valor:Number,
   edadminima:Number,
   edadmaxima:Number,
   ciudad: String,
  
});
var eventos=mongoose.model('eventos',eventosSchema);
module.exports=eventos;