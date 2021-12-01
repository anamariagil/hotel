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

rutas.post('/hotel/Reserva', agregarReserva)  
rutas.get('/hotel/Reserva/id', buscarReserva)  
rutas.delete('/hotel/Reserva/id', eliminarReserva)    
rutas.put('/hotel/Reserva/id', editarReserva)
rutas.post('/hotel/Habitacion', agregarHabitacion)  
rutas.get('/hotel/Habitacion/id', buscarHabitacion)  
rutas.delete('/hotel/Habitacion/id', eliminarHabitacion)    
rutas.put('/hotel/Habitacion/id', editarHabitacion)

module.exports = rutas