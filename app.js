require('dotenv').config()

const ServidorModelo=require("./models/ServidorModelo.js")

const servidor=new ServidorModelo()

servidor.despertarServidor()