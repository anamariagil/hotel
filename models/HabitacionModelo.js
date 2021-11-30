const {model, Schema}=require('mongoose')

const HabitacionModelo=Schema({
    nombreHabitacion:{
        type:String,
        required:true
    },
    fotoHabitacion:{
        type:String,
        required:true
    },
    descripcionHabitacion:{
        type:String,
        required:true
    },
    precioAdulto:{
        type:Number,
        required:true
    },
    precioJoven:{
        type:Number,
        required:true
    }
})

module.exports=model('Habitaciones', HabitacionModelo)