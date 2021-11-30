const mongoose = require('mongoose');

async function conectarBD(){
    try{
        await mongoose.connect(process.env.BASEDATOS)
        console.log("Éxito conectandose a la base de datos")
    }catch(error){
        console.log(error)
    }
}

module.exports={conectarBD}