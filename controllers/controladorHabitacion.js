const {request, response} = require('express')
const {insertarHabitacion} = require('../services/servicioHabitacion.js')
const {leerHabitacion} = require('../services/servicioHabitacion.js')
const {borrarHabitacion} = require('../services/servicioHabitacion.js')
const {modificarHabitacion} = require('../services/servicioHabitacion.js')

async function agregarHabitacion(peticion=request, respuesta=response){
    try{
        let datos=peticion.body
        await insertarHabitacion (datos)
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

async function buscarHabitacion(peticion=request, respuesta=response){
    try{
        let id=peticion.params.id
        let habitacion = await leerHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:habitacion
        })
    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Paila "+error
        })
    }
}

async function eliminarHabitacion(peticion=request, respuesta=response){
    try{
        let id=peticion.params.id
        await borrarHabitacion(id)
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

async function editarHabitacion(peticion=request, respuesta=response){
    try{
        let id=peticion.params.id
        let datos=peticion.body
        await modificarHabitacion(id, datos)
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

module.exports = {agregarHabitacion, buscarHabitacion, eliminarHabitacion, editarHabitacion}
