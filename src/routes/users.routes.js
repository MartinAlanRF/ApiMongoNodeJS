const { Router } = require ("express");
//const { get } = require("mongoose");

const {
    getUser,
    postUser,
    updateUser,
    deleteUser
} = require ("../controllers/users.controller.js")

const router = Router();

router.get("/", getUser);

router.post("/", postUser);

router.put("/:idUser", updateUser);

router.delete("/:idUser", deleteUser);

module.exports = router;