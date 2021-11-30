const express = require('express')
const cors = require('cors')
const {conectarBD}=require('../database/conexion.js')
const rutas=require('../routes/rutas.js')

class ServidorModelo{

    constructor(){
        this.app=express();
        this.despertarBD();
        this.enrutarPeticiones();
        this.llamarAuxiliares();
    }

    despertarServidor(){
        this.app.listen(process.env.PUERTO, function(){
            console.log("Servidor encendido " + process.env.PUERTO)
        })
    }

    enrutarPeticiones(){
        this.app.use("/", rutas);
    }

    despertarBD() {
        conectarBD()
    }

    llamarAuxiliares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

}

module.exports = ServidorModelo