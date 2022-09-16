const { Router, urlencoded } = require("express");

const {
    getProducts,
    postProducts,
    upDateProducts,
    deleteProducts
} = require ("../controllers/products.controller.js");

//Middleware
const { validarJWT } = require("../middlewares/jwt.middleware.js")

const router = Router();

router.get("/", validarJWT, getProducts);

router.post("/", validarJWT, postProducts);

router.put("/:idProduct", validarJWT, upDateProducts);

router.delete("/:idProduct", validarJWT, deleteProducts);

//Esta es una exportacion default
//cuando se usa una con parametros es con {}
module.exports = router;