const {Router} = require ("express");
const router = Router();

const { registerUser, login, verifyUser } = require ("../controllers/auth.controller.js")
//Middleware
const { validarJWT } = require("../middlewares/jwt.middleware.js")


router.post("/", registerUser);
router.post("/login", login);
//Aquí se coloca el middleware para proteger esta ruta, esta sirve de ejemplo para 
//verificar que solo usuarios logeados y con un token valido puedan realizar o hacer ciertas
//accione
router.get("/", validarJWT, verifyUser)

module.exports = router;