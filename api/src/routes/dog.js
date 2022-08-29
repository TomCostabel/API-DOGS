// const { Router } = require("express");
// const { Dog, Temperament } = require("../db.js");
// const { v4: uuidv4 } = require("uuid");
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');

// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// // https://i.blogs.es/672170/doge/450_1000.jpg
// router.post("/", async (req, res) => {
//     const {
//         name,
//         heightMin,
//         heightMax,
//         weightMin,
//         weightMax,
//         lifespan,
//         image,
//         temperament,
//     } = req.body;
//     if (!name && !heightMin && !heightMax && !weightMin && !weightMax) {
//         res.status(404).send(
//             "Se necesita Name, heightMin, heightMax, weightMin y weightMax para continuar"
//         );
//     }
//     try {
//         const dogCreate = await Dog.create({
//             name: name,
//             heightMin: heightMin,
//             heightMax: heightMax,
//             weightMin: weightMin,
//             weightMax: weightMax,
//             lifespan: lifespan,
//             image: image
//                 ? image
//                 : "https://i.blogs.es/672170/doge/450_1000.jpg",
//         });
//         if (temperament) {
//             temperament.forEach(async (e) => {
//                 const dogTempDB = await Temperament.findAll({
//                     where: {
//                         nameTemp: e,
//                     },
//                 });

//                 dogCreate.addTemperament(dogTempDB);
//             });
//         }
//         res.json(dogCreate);
//     } catch (err) {
//         console.log("Error in POST", err);
//     }
//     // .then((dogs) =>
//     //     res.json({
//     //         ...dogs,
//     //         id: uuidv4,
//     //     })
//     // )
//     // .catch((err) => console.log("Error in POST", err));
// });

// module.exports = router;
