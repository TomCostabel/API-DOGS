// const { Router } = require("express");
const axios = require("axios");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const API_KEY = "0f2efe03-3eee-449e-9d0d-4524a73230e6";

const getAllTemperaments = async () => {
    const allTemperaments = await axios
        .get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        .then((res) => res.data);

    let arrTemps = [];
    allTemperaments.forEach((el) => {
        let temps = el.temperament && el.temperament.split(", ");
        temps &&
            temps.forEach((temperament) => {
                if (!arrTemps.includes(temperament)) arrTemps.push(temperament);
            });
    });
    console.log("Los temperamentos son", arrTemps);
    return arrTemps;
};

module.exports = { getAllTemperaments };
