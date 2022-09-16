const { Router, urlencoded } = require("express");

const {
    getProducts,
    postProducts,
    upDateProducts,
    deleteProducts
} = require ("../controllers/products.controller.js");

const router = Router();

router.get("/", validarJWT ,getProducts);

router.post("/", postProducts);

router.put("/:idProduct", upDateProducts);

router.delete("/:idProduct", deleteProducts);

//Esta es una exportacion default
//cuando se usa una con parametros es con {}
module.exports = router;