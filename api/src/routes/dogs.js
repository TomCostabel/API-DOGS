const { Router } = require("express");
const axios = require("axios");
// const { API_KEY } = process.env;
// const { api } = require("./Controllers/GetAllDogs.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const API_KEY = "0f2efe03-3eee-449e-9d0d-4524a73230e6";

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const api = async () => {
    const arr = await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    return arr.data;
};

router.get("/", async (req, res) => {
    const apiDogs = await api();
    try {
        res.status(200).json(apiDogs);
    } catch (error) {
        console.log("error en GET ", error);
    }
});

router.get("/:idRaza", async (req, res) => {
    const idRaza = req.params.idRaza;
    try {
        let dogsTotal = await api();
        if (idRaza) {
            let dogId = await dogsTotal.filter((e) => e.id == idRaza);
            dogId.length
                ? res.status(200).json(dogId)
                : res.status(404).send("No hay perro con este ID");
        } else {
            res.status(200).send(dogsTotal);
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
