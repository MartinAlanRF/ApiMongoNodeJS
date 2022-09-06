const mongoose = require ("mongoose");


const dbConection = () =>{
try{
    mongoose.connect(process.env.MONGODB_CONECTION,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    console.log("Base de datos conectada");
}
catch (error){
    console.log(error)
    throw new Error ("Error de conexion con la base de datos");
}
};

module.exports = {
    dbConection,
}