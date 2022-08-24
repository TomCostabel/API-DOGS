const { Router } = require("express");
const { getAllTemperaments } = require("./Controllers/temperamentos.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
    try {
        const temepraments = await getAllTemperaments();
        res.status(200).json(temepraments);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
