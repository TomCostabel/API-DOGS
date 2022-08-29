const { Router } = require("express");
const axios = require("axios");
// const dog = require("../models/Dog.js");
const { Dog, Temperament } = require("../db.js");

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
const getDogsDB = async () => {
    try {
        const dogsDB = await Dog.findAll({
            include: [Temperament],
        });
        return dogsDB;
    } catch {
        return "No hay dogs en DB";
    }
};
router.get("/dogsDB", async (req, res) => {
    const result = await getDogsDB();
    res.send(result);
});
router.get("/dogsApi", async (req, res) => {
    const result = await api();
    res.send(result);
});

router.get("/", async (req, res) => {
    const dogsApi = await api();
    const dogsDB = await getDogsDB();
    const allBreeds = dogsApi.concat(dogsDB);
    res.send(allBreeds);
    const apiDogs = await api();
    try {
        res.status(200).json(apiDogs);
    } catch (error) {
        console.log("error en GET ", error);
    }
});

router.get("/:idRaza", async (req, res) => {
    // console.log(req.params);
    const idRaza = req.params.idRaza;
    try {
        let dogsTotal = await api();
        if (idRaza) {
            let dogId = await dogsTotal.filter((e) => e.id == idRaza);
            if (dogId.length) res.status(200).json(dogId);
            if (idRaza.includes("-")) {
                let DogDB = [];
                DogDB.push(
                    await Dog.findByPk(idRaza, {
                        include: [Temperament],
                    })
                );
                res.status(200).json(DogDB);
            }
            // dogId.length
            //     ? res.status(200).json(dogId)
            //     : res.status(404).send("No hay perro con este ID");
        } else {
            res.status(200).send(dogsTotal);
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/", async (req, res) => {
    console.log("esto en body", req.body);
    const {
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        lifespanMin,
        lifespanMax,
        image,
        temperaments,
    } = req.body;

    if (!name && !heightMin && !heightMax && !weightMin && !weightMax) {
        res.status(404).send(
            "Se necesita Name, heightMin, heightMax, weightMin y weightMax para continuar"
        );
    }
    try {
        const dogCreate = await Dog.create({
            name,
            heightMin,
            heightMax,
            weightMin,
            weightMax,
            lifespanMin,
            lifespanMax,
            image: !image
                ? "https://estaticos.muyinteresante.es/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-redes.jpg"
                : image,
        });
        const temperament = await Temperament.findAll({
            includes: { nameTemp: temperaments },
        });
        dogCreate.addTemperament(temperament);
        res.status(200).json(dogCreate);
        // if (temperament) {
        //     temperament.forEach(async (e) => {
        //         const dogTempDB = await Temperament.findAll({
        //             where: {
        //                 nameTemp: e,
        //             },
        //         });

        //     });
        // }
    } catch (err) {
        console.log("Error in POST", err);
    }
});

module.exports = router;
