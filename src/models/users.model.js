const {Schema, model} = require ("mongoose");

const UserSchema = Schema ({
    name: {
        type: String,
        require: [true, "El nombre es requerido"],
    },
    lastName: {
        type: String,
        require: [true, "El apellido es requerido"],
    },
    userName: {
        type: String,
        require: [true, "El nickName es requerido"],
        unique: true
    },
    email:{
        type: String,
        require: [true, "El email es requerido"],
        unique: true
    },
    password: {
        type: String,
    }
});
/* Esto es para renombrar el campo id en el back para las resp en el front */
UserSchema.methods.toJSON = function () {
    const { __v, _id, ...rest } = this.toObject();
    rest.id = _id;
    return rest;
  };

/* Si se coloca en singular porque automaticamente este lo completa en plurar */
module.exports = model("user", UserSchema);