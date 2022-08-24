const { Router } = require("express");
const homeDogs = require("./dogs.js");
const temps = require("./temps.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/dogs", homeDogs);
router.use("/temperaments", temps);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
