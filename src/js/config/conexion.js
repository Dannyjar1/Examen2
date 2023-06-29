var mongoose= require("mongoose");
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false
var connection=mongoose.connect("mongodb://127.0.0.1:27017/");

mongoose.connection.on('open',(ref)=>{
    console.log("conectado a mongodb");
});
module.exports=connection;