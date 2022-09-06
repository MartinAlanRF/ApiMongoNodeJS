const {Schema, model} = require("mongoose");

const ProductSchema = Schema({
   name: {
        type: String,
        required: [ true, "El nombre es obligatorio"],
        unique: true,
    },
    description:{
        type: String, 
        default: "No definido"
    },
    price: {
        type: Number
    }

});

module.exports = model("product", ProductSchema);