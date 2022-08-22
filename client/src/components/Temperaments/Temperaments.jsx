import axios from "axios";
import React from "react";

export default function Temperaments() {
    const getAllTemperaments = async () => {
        const allTemperaments = await axios
            .get(
                "https://api.thedogapi.com/v1/breeds?api_key=0f2efe03-3eee-449e-9d0d-4524a73230e6"
            )
            .then((res) => res.data);

        let arrTemps = [];
        allTemperaments.forEach((el) => {
            let temps = el.temperament && el.temperament.split(", ");
            temps &&
                temps.forEach((temperament) => {
                    // if (!arrTemps.temeprament)
                    // arrTemps.push(temperament);
                    if (!arrTemps.includes(temperament))
                        arrTemps.push(temperament);
                });
        });
        console.log("la wea pusheada", arrTemps);
        return arrTemps;
    };

    console.log("Holis soy temperamentos", getAllTemperaments());
    return <div>Holis soy temperamentos</div>;
}
