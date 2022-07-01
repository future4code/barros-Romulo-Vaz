import React from "react";
import { MainContainer } from "../style";
import minhaImg from '../labenu.jpg'

function SideRight() {
    return(
        <MainContainer>
            <aside/>
            <header> 
                <img src={minhaImg}/> 
                <h1> WhatsLab </h1> 
                <form>
                    <div>
                        <label for='remetente'> Remetente</label>
                        <input type='text' id='remetente'></input>
                    </div>
                    <div>
                        <label for='mensagem'>Mensagem: </label>
                        <input type='text' id='mensagem'></input>
                    </div>
                        <input type='submit' value='enviar'></input>
                </form>
            </header>
            <aside/>
        </MainContainer>
    )
}

export default SideRight