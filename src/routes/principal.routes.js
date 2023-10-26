const express = require("express");
const router = express.Router();


const {

    guardarsensor,
    registrarsensor,
    listarsensores

}= require("../controllers/principal.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

router.post("/sensor", guardarsensor);
router.get("/registrar", isAuthenticated,registrarsensor);
router.get("/Mostrar", isAuthenticated, listarsensores);

module.exports = router;