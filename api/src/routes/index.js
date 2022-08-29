const { Router } = require("express");
const homeDogs = require("./dogs.js");
const temps = require("./temps.js");
const dog = require("./dog.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/dogs", homeDogs);
router.use("/temperaments", temps);
// router.use("/dog", dog);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
