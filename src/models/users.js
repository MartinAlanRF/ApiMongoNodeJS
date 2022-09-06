const {Schema, model} = require ("mongoose");

const UserSchema = Schema ({
    email:{
        type: String,
        require: [true, "El email es requerido"]
    },
    userName: {
        type: String,
        require: [true, "El nombre es requerido"],
        unique: true
    },
    password: {
        type: String,
    }
});

UserSchema.methods.toJSON = function () {
    const { __v, _id, ...rest } = this.toObject();
    rest.id = _id;
    return rest;
  };

/* Si se coloca en singular porque automaticamente este lo completa en plurar */
module.exports = model("user", UserSchema);