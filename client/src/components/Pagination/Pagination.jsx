import React from "react";
import "../Pagination/Pagination.css";

export default function Pagination(props) {
    // const dogs = useSelector((state) => state.dogs);

    return (
        <div>
            <div className="container-buttons">
                <buttom
                    className={"individual" && "botonPrevNext"}
                    onClick={props.prevHandler}
                    disabled={props.currentPage <= 0 && true}
                >
                    &#171;
                </buttom>
                <h4 className="individual">{props.currentPage}</h4>
                <buttom
                    className={"individual" && "botonPrevNext"}
                    onClick={props.nextHandler}
                    disabled={props.currentPage >= 21 && true}
                >
                    &#187;
                </buttom>
            </div>
            <br />
            <div className="container-padre">
                <ul className="container-cards">{props.items}</ul>
            </div>
        </div>
    );
}
