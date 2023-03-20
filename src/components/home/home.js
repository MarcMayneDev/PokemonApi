import React from 'react';
import fondo from '../../home.jpg';

function Principal() {
    return (
        <div className='container justify-content-center'>
            <div className="Principal mt-4">
                <h1>Dokkan Battle</h1>
                <img src={fondo} className='img-fluid' alt="fondo" />
            </div>
        </div>
    )
}

export default Principal;