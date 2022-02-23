
import React from "react"
import { useContextGlobal } from "./Context"
import PokemonGeneric from "./PokemonGeneric"
import axios from "axios"
import {Img} from 'react-image'


const Evolution = () => {



    const {pokemonDetails,isLoading, originalList} = useContextGlobal()

    if (isLoading) {
        return (
            <h1>Loading your pokemons</h1>
        )
    }

    




    const hasFirstEvolution = pokemonDetails.details.evolutionData.chain.evolves_to.length > 0
    const firstEvoArray = pokemonDetails.details.evolutionData.chain.evolves_to  || []
    





    const hasSecondEvolution = hasFirstEvolution && pokemonDetails.details.evolutionData.chain.evolves_to[0].evolves_to.length > 0
    const secondEvoArray = pokemonDetails.details.evolutionData.chain.evolves_to  || []



  







    // console.log(startPokemonIMGs, firstEvoIMGs, secondEvoIMGs)

    return (
        <div className="bio-evolutions">

            <h2>EVOLUTION CHAIN</h2>



            <div className="evo-level">
                <img src={pokemonDetails.evoIMG.startPokemonEvo.IMGs[0]} alt="xx" />

                <div className="evo-level-details">
                    <p className="evo-name">{pokemonDetails.evoIMG.startPokemonEvo.name}</p>
                </div>


            </div>



            {hasFirstEvolution && (

            <div className="evo-level">
                {firstEvoArray.map(spec => {return (
                    <>
                    {/* <img src={pokemonDetails.evoIMG.firstEvoIMGs[0]} alt="xx" /> */}
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + spec.species.url.split("/").filter(text => text !== "").pop() + ".png"} alt="xx" />
                    <div className="evo-level-details">
                        <p className="evo-name">{spec.species.name} </p>
                        <p className="evo-details-poke">Minimum level:{spec.evolution_details[0].min_level || "none"}</p>
                        <p className="evo-details-poke">Trigger: {spec.evolution_details[0].trigger.name}</p>
                        {console.log(spec.species.url.split("/").filter(text => text !== "").pop())}
                    </div>
                    </>                    
                    )})}
            </div>
            )}

            {hasSecondEvolution && (

            <div className="evo-level">
                {console.log(secondEvoArray)}
                {secondEvoArray.map(spec => 
                    spec.evolves_to.map(item => { return (
                    <>
                    {/* <img src={pokemonDetails.evoIMG.secondEvoIMGs[0]} alt="xx" /> */}
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + item.species.url.split("/").filter(text => text !== "").pop() + ".png"} alt="xx" />
                    {console.log(item.species.url.split("/").filter(text => text !== "").pop())}
                    <div className="evo-level-details">
                        <p className="evo-name">{item.species.name}</p>
                        <p className="evo-details-poke">Minimum level: {item.evolution_details[0].min_level || "none"}</p>
                        <p className="evo-details-poke">Trigger: {item.evolution_details[0].trigger.name}</p>
                    </div>
                    </>
                    )})                    
                    )}
            </div>
            )}


        </div>
    )

}

export default Evolution