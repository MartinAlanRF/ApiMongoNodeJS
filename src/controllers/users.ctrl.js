const User = require ("../models/users");


const getUser = async (req, res) =>{
    const usuarios = await User.find();

    return res.json({
        ok: true,
        msg: "Se obtuvieron los usuarios",
        data: usuarios,
    });
};

const postUser = async (req, res) =>{
    const { email, userName, password } = req.body;

    const user = {
        email: email,
        name: userName,
        password: password
    }

    const newUser = await User.create(user);

    return res.status(201).json ({
        msg: `Se creó un nuevo usuario`,
        data: newUser
    });
};

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {name} = req.body;

    const user = {
        name: name,
    }
    //Se coloca el {new: true para que traiga la info del usuario ya actualizada}
    const userUpdated = await User.findByIdAndUpdate (name, {new: true});

    return res.json({
        msg: `Se actualizo el usuario ${name} con el id: ${idUser}`,
        data: userUpdated,
    });
};


const deleteUser = async (req, res) =>{
    const {idUser} = req.params;

    const userDeleted = await User.findByIdAndRemove(idUser);

    return res.json({
        msg: `Se elimino el usuario ${idUser}`,
        data: userDeleted
    });
};


module.exports = {getUser, postUser, updateUser, deleteUser}