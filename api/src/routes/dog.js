const { Router } = require("express");
const { Dog } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/", async (req, res) => {
    console.log("esto es BODY", req.body);

    try {
        res.status(200).json("DATA FUNCIONANDO");
    } catch (error) {
        console.log("error en post ", error);
    }
});

module.exports = router;
