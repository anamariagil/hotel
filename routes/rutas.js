const {Router} =require('express')
const rutas =  Router();
const {agregarReserva}=require('../controllers/controladorReserva.js');
const {buscarReserva}=require('../controllers/controladorReserva.js');
const {eliminarReserva}=require('../controllers/controladorReserva.js');
const {editarReserva}=require('../controllers/controladorReserva.js');
const {agregarHabitacion}=require('../controllers/controladorHabitacion.js');
const {buscarHabitacion}=require('../controllers/controladorHabitacion.js');
const {eliminarHabitacion}=require('../controllers/controladorHabitacion.js');
const {editarHabitacion}=require('../controllers/controladorHabitacion.js');

rutas.post('/hotel/postReserva', agregarReserva)  
rutas.get('/hotel/getReserva/id', buscarReserva)  
rutas.delete('/hotel/deleteReserva/id', eliminarReserva)    
rutas.put('/hotel/putReserva/id', editarReserva)
rutas.post('/hotel/postHabitacion', agregarHabitacion)  
rutas.get('/hotel/getHabitacion/id', buscarHabitacion)  
rutas.delete('/hotel/deleteHabitacion/id', eliminarHabitacion)    
rutas.put('/hotel/putHabitacion/id', editarHabitacion)

module.exports = rutas