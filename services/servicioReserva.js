const ReservaModelo=require('../models/ReservaModelo.js')

async function insertarReserva(datos){
    let reservaNueva = new ReservaModelo(datos)
    return await reservaNueva.save()
}

async function leerReserva(id){
    let reservaBuscada = await ReservaModelo.findById(id)
    return reservaBuscada
}

async function borrarReserva(id){
    return await ReservaModelo.findByIdAndDelete(id)
}

async function modificarReserva(id, datos){
    return await ReservaModelo.findByIdAndUpdate(id, datos)
}

module.exports={
    insertarReserva,
    leerReserva,
    borrarReserva,
    modificarReserva
}