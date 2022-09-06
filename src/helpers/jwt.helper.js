const jwt = require ("jsonwebtoken")

const generateJWT = (id =" ") =>{
    return new Promise((resolve, reject) => {
        // const payload = {id: id}
        const payload = {id}

        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: "4h"
            },
            (err, token) =>{
                if(err){
                    reject("No se pudo generar el token")
                } else{
                    resolve(token);
                }
            }
        )

    });
};

module.exports = {
    generateJWT,
}