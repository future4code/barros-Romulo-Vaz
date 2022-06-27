import React from "react";
import './CardPequeno.css'

function CardPequeno(props){
    return (
        <div className="smallcard-container">
            <img src= {props.imgCard}/>
            <div>
                <h5>{ props.tituloEmail }</h5>
                <p>{ props.email }</p>
                <h5>{ props.tituloEndereco }</h5>
                <p>{ props.endereco}</p>
            </div>
        </div>
    )
}

export default CardPequeno;