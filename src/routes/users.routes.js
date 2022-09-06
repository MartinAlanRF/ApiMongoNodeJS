const { Router } = require ("express");
//const { get } = require("mongoose");

const {
    getUser,
    postUser,
    updateUser,
    deleteUser
} = require ("../controllers/users.ctrl.js")

const router = Router();

router.get("/", getUser);

router.post("/", postUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;