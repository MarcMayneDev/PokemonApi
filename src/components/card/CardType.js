import React from "react"
import { CardPokemonType } from "./CardPokemonType"
import '../PokemonsList/Cards.css'

export const CardType = ({results}) => {
    console.log(results)
    return (
        <div className="container">
            <ul className="cards">
                {
                    results.pokemon.map( p=> (
                        <li className="card-item" >
                            <CardPokemonType url={p.pokemon.url} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}