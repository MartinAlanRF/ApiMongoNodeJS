const User = require ("../models/users.model.js");
const bcrypt = require ("bcrypt");
const { generateJWT } = require("../helpers/jwt.helper");


// const User = require("../models/user");
// const bcrypt = require("bcrypt");
// const { generarJWT } = require("../helpers/jwt.helper");

const registerUser = async (req, res) =>{
    try {
        const {email, userName, password} = req.body;

        const emailFound = await User.findOne({email: email});
    
        if(emailFound) {
            return res.status(400).json({
                ok: false,
                msg: `Error, el correo ${emailFound.email} ya esta registrado`,
            });
        }
        
        const userFound = await User.findOne({userName: userName});

        if(userFound){
            return res.status(400).json({
                ok: false,
                msg: `Error, el usuario ${userFound.userName} ya esta registrado, intente nuevamente`,
            });
        }

        const salt = bcrypt.genSaltSync(10);
    
        const user = {
            email: email,
            userName: userName,
            password: bcrypt.hashSync(password, salt),
        };
    
        const newUser = await User.create(user);
    
        const token = await generateJWT(newUser.id);
    
        return res.status(201).json({
            ok: true,
            mg: "Registro éxitoso",
            data: newUser,
            token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Problemas del lado del servidor",
            data: [],
        });  
    }

};

const login = async (req, res) => {
  /*   try { */
        const { userName, password } = req.body;

        const user = await User.findOne({ userName });
        //Esto es falso debido a que no se encontro al usuario
        if(!user){
            return res.status(400).json({
                ok: false,
                msg: "Error al iniicar sesion",
            });
        }
    
       const validatePassword = bcrypt.compareSync(password, user.password);
      //Esto es falso debido a que no pudo comparar la contraseña
      if(!validatePassword){
        return res.status(400).json({
            ok: false,
            msg: "Error al iniicar sesion",
        });
        }
        
        const token = await generateJWT(user.id);

        return res.status(201).json({
            ok: true,
            msg: "Acceso otorgado",
            data: user,
            token,
        });

/*     } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: "Problemas del lado del servidor",
            data: []
        });
    } */
   
}

const verifyUser = async (req, res) => {
    const { user } = req;

    const token = await generateJWT (user.id);

    return res.json({
        ok: true,
        msg: "Token verificado y renovado",
        data: user,
        token: token
    })
};

module.exports = {
    registerUser,
    login,
    verifyUser
}