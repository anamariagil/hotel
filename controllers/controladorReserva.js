const {request, response} = require('express')
const {insertarReserva} = require('../services/servicioReserva.js')
const {leerReserva} = require('../services/servicioReserva.js')
const {borrarReserva} = require('../services/servicioReserva.js')
const {modificarReserva} = require('../services/servicioReserva.js')

async function agregarReserva(peticion=request, respuesta=response){
    try{
        let datos=peticion.body
        await insertarReserva(datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Bien, se agregó"
        })
    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Paila "+error
        })
    }
}

async function buscarReserva(peticion=request, respuesta=response){
    try{
        let id=peticion.params.id
        let reserva = await leerReserva(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:reserva
        })
    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Paila "+error
        })
    }
}

async function eliminarReserva(peticion=request, respuesta=response){
    try{
        let id=peticion.params.id
        await borrarReserva(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Bien, se borró"
        })
    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Paila "+error
        })
    }
}

async function editarReserva(peticion=request, respuesta=response){
    try{
        let id=peticion.params.id
        let datos=peticion.body
        await modificarReserva(id, datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Bien, se editó"
        })
    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Paila "+error
        })
    }
}

module.exports = {agregarReserva, buscarReserva, eliminarReserva, editarReserva}
