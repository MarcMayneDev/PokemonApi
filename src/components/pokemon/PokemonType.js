import React, {useEffect, useState} from 'react'
import {UseFetch} from '../UseFetch'
import {CardType} from '../card/CardType'
import  { useParams } from "react-router-dom";
import { Tipos } from '../Tipos/Tipos';

const PokemonType = () => {
    const {id} = useParams();
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/type/1');

    const estado = UseFetch(url)
    const {cargando, data} = estado

    useEffect(() => {
        setUrl('https://pokeapi.co/api/v2/type/' + id)
    }, [id])

    return (
        <>
            {
                cargando
                ?
                <h1>Cargando...</h1>
                :
                <>  
                    <Tipos/>
                    <CardType results={data}></CardType>
                    <div className='container m-auto'>
                        <button onClick={(()=>setUrl(data.previous))} className='m-2 btn btn-dark'>Anterior</button>
                        <button onClick={(()=>setUrl(data.next))} className='m-2 btn btn-dark'>Siguiente</button>
                    </div>
                </>
            }
        </>
    )
}

export default PokemonType