const jwt = require ("jsonwebtoken")
const User = require ("../models/users")

//Ocupa los mismos parametros que un controlador
// pero se agregar Next es usado para verificar que todo salga bien para 
//ser el siguiente en este caso el contralador que tenga al lado en index.js
const validarJWT = async (req, res, next) =>{
    //req.header es para entrar al encabezado
   // const token = req.header("auth-token");
    const token = req.header("x-auth-token");
    //Si no hay token osea que sea falso
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: "No hay token, permiso no valido"
        });
    }

    try {
        const  { id } = jwt.verify(token, process.env.SECRET)

        const user = await User.findById(id)
    
        if(!user){
            return res.status(401).json({
                ok: false,
                msg: "Token no validos"
            });
        };
        //Este parametro usuario se agrega al req, para poder validar el token del
        // usuario desde el req en el auth controller dentro de verfify user
        req.user = user
        next();

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        });
    }
};

module.exports = {
    validarJWT,
}