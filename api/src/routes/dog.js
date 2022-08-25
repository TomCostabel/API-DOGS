const { Router } = require("express");
const { Dog, Temperament } = require("../db.js");
const { v4: uuidv4 } = require("uuid");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/", async (req, res, next) => {
    const dog = req.body;
    return Dog.create(dog)
        .then((dogs) =>
            res.json({
                ...dog,
                id: uuidv4,
            })
        )
        .catch((err) => next(err));
    // try {
    //     res.status(200).json("Dog");
    // } catch (error) {
    //     console.log("error en post ", error);
    // }
});

module.exports = router;
