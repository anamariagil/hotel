const HabitacionModelo=require('../models/HabitacionModelo.js')

async function insertarHabitacion(datos){
    let habitacionNueva = new HabitacionModelo(datos)
    return await habitacionNueva.save()
}

async function leerHabitacion(id){
    let habitacionBuscada = await HabitacionModelo.findById(id)
    return habitacionBuscada
}

async function borrarHabitacion(id){
    return await HabitacionModelo.findByIdAndDelete(id)
}

async function modificarHabitacion(id, datos){
    return await HabitacionModelo.findByIdAndUpdate(id, datos)
}

module.exports={
    insertarHabitacion,
    leerHabitacion,
    borrarHabitacion,
    modificarHabitacion
}