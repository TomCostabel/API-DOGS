import React from "react";
import "../Pagination/Pagination.css";

export default function Pagination(props) {
    // const dogs = useSelector((state) => state.dogs);

    return (
        <div>
            <div className="container-buttons">
                <h3
                    className={"individual" && "botonPrevNext"}
                    onClick={props.prevHandler}
                    disabled={props.currentPage <= 1 && true}
                >
                    &#8592;
                </h3>
                <h4 className="individual">PAGE {props.currentPage + 1}</h4>
                <h3
                    className={"individual" && "botonPrevNext"}
                    onClick={props.nextHandler}
                    disabled={props.currentPage >= 21 && true}
                >
                    &#8594;
                </h3>
            </div>
            <br />
            <div className="container-padre">
                <ul className="container-cards">{props.items}</ul>
            </div>
        </div>
    );
}
