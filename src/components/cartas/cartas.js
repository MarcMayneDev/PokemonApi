import React from 'react';
import Tarjeta from '../card/card';
import Tarjeta2 from '../card/card2';
import Tarjeta3 from '../card/card3';
import Tarjeta4 from '../card/card4';
import './cartas.css';

function Cartas() {
    return (
        <div className="Cartas">
            <div class="cartas">
                <Tarjeta></Tarjeta>
                <Tarjeta2></Tarjeta2>
                <Tarjeta3></Tarjeta3>
                <Tarjeta4></Tarjeta4>
            </div>
        </div>
    )
}

export default Cartas;