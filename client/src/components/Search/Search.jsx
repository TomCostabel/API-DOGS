// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../Search/Search.css";

// export default function Search() {
//     const [buscador, setBuscador] = useState("");

//     const handleChange = (e) => {
//         setBuscador(e.target.value);
//         console.log(e.target.value);
//     };

//     return (
//         <div>
//             <input
//                 value={buscador}
//                 placeholder="Breed..."
//                 onChange={(e) => handleChange(e)}
//             />

//             <Link to={`/Home/breedDetail/${buscador}`}>
//                 <button
//                     // onClick={() => alert(`el input es: ${buscador}`)}
//                     type="submit"
//                     className="boton"
//                 >
//                     Search
//                 </button>
//             </Link>
//         </div>
//     );
// }
