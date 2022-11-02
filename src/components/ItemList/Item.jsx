import React from "react";

import MyButton from "../MyButton/MyButton";
import "../ItemList/Item.css"

function Item(props) {
    return (
        <div className="card">

            <div className="card-img">
                <img src={props.imgurl} alt={props.title} />
            </div>

            <div className="card-detail">
                <h3>{props.title}</h3>
                <p>{props.price} U$D</p>
            </div>

            <MyButton text="Ver Más" color="lightblue"/>

        </div>
    )
}

export default Item;