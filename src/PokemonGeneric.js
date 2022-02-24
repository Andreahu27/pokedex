import React from "react"
import axios from "axios"
import { FaRegWindowClose } from "react-icons/fa"

import {useContextGlobal} from "./Context"

const PokemonGeneric = () => {

    const {pokemons, search, pokeList,dispatch, SetIsLoading, hasEvolutionData, setHasEvolutionData,setDisplayPokemons, displayPokemons} = useContextGlobal()

    return pokemons.sort((a,b) => {return a.id - b.id}).map((poke) => {
        
        const primaryType = poke.types[0].type.name
        let bgColor = ""

        if (primaryType === "grass") {bgColor="#b8e994"}
        else if (primaryType === "water") {bgColor="#D4F1F4"}
        else if (primaryType === "fire") {bgColor="#FF8A8A"}
        else if (primaryType === "normal") {bgColor="#F9F1F0"} 
        else if (primaryType === "ice") {bgColor="#B7CFDC"}
        else if (primaryType === "poison") {bgColor="#DAD870"}
        else if (primaryType === "bug") {bgColor="#ECF87F"}
        else if (primaryType === "rock") {bgColor="#D0B49F"}
        else if (primaryType === "steel") {bgColor="#C0C9D0"}
        else if (primaryType === "fairy") {bgColor="#FADCD9"}
        else if (primaryType === "electric") {bgColor="#F8EA8C"}
        else if (primaryType === "fighting") {bgColor="#FEF4D7"}
        else if (primaryType === "ground") {bgColor="#DCBAA9"}
        else if (primaryType === "dragon") {bgColor="#FFB067"}
        else if (primaryType === "dark") {bgColor="#5885AF"}
        else if (primaryType === "ghost") {bgColor="#7954A1"} 
        else if (primaryType === "psychic") {bgColor="#DEBAD6"} 
        else if (primaryType === "flying") {bgColor="#D4F1F4"}


        const bgStyle = {
            backgroundColor: bgColor
        }

        const isLoadingPokemon = true

        const loadingStyle = {
            backgroundColor :"white"
        }

        return (
            
    
                <div key={poke.id} className="pokemon-card" style={displayPokemons ? bgStyle : {visibility:"hidden"}}
                                
                    onClick={ async () => {

                    setDisplayPokemons(false)

                    //SetIsLoading(true)

                    try {
                    
                    setHasEvolutionData(true)


                    const res = await axios.get("https://pokeapi.co/api/v2/pokemon-species/"  + poke.name)
                    const details = await res.data

                    const evolutionChainUrl = details.evolution_chain.url
                    const evolutionRes = await axios.get(evolutionChainUrl)
                    const evolutionData = await evolutionRes.data

                    const startPokemon = evolutionData.chain.species.name
                    const startPokemonArray = [].push(evolutionData.chain.species.name)
                    const startPokemonEvo = {IMGs: [], name:startPokemon}

                    const resStartP = await axios.get("https://pokeapi.co/api/v2/pokemon/" + startPokemon)
                    const dataStartP = await resStartP.data
                    const URLStartP = dataStartP.sprites.other.home.front_default 
                    startPokemonEvo.IMGs.push(URLStartP)

                    const hasFirstEvolution = evolutionData.chain.evolves_to.length > 0

                    const firstEvoArray = evolutionData.chain.evolves_to  || []
                    let firstEvoIMGs = []


                    if (firstEvoArray.length > 0)  {

                    // firstEvoArray.map( async (spec) => {
                    //     const resFirst = await axios.get("https://pokeapi.co/api/v2/pokemon/" + spec.species.name)
                    //     const dataFirst = await resFirst.data
                    //     const URLFirst = dataFirst.sprites.other.dream_world.front_default 
                    //     firstEvoIMGs.push(URLFirst)
                    // })

  

                        const resFirst = await axios.get("https://pokeapi.co/api/v2/pokemon/" + firstEvoArray[0].species.name)
                        const dataFirst = await resFirst.data
                        const URLFirst = dataFirst.sprites.other.home.front_default 
                        firstEvoIMGs.push(URLFirst)

                        // firstEvoArray.map( async (spec) => {
                        // const resFirst = await axios.get("https://pokeapi.co/api/v2/pokemon/" + spec.species.name)
                        // const dataFirst = await resFirst.data
                        // const URLFirst = await dataFirst.sprites.other.home.front_default 
                        // return firstEvoIMGs = firstEvoIMGs.push(URLFirst)

                        console.log("here", firstEvoArray, firstEvoIMGs)

                    }

                    let secondEvoIMGs = []


                    const hasSecondEvolution = hasFirstEvolution && evolutionData.chain.evolves_to[0].evolves_to.length > 0

                    if (hasSecondEvolution) {

                        const secondEvoArray = evolutionData.chain.evolves_to  || []

                        

                        // secondEvoArray.map(item => item.evolves_to.map( async (spec) => {
                        //     const resFirst = await axios.get("https://pokeapi.co/api/v2/pokemon/" + spec.species.name)
                        //     const dataFirst = await resFirst.data
                        //     const URLFirst = dataFirst.sprites.other.dream_world.front_default 
                        //     secondEvoIMGs.push(URLFirst)
                        // }))

                        const endPoint = secondEvoArray[0].evolves_to[0].species.name
                        const resFirst = await axios.get("https://pokeapi.co/api/v2/pokemon/" + endPoint)
                        const dataFirst = await resFirst.data
                        const URLFirst = dataFirst.sprites.other.home.front_default
                        console.log(URLFirst)
                        secondEvoIMGs.push(URLFirst)              
                        
                    }
                    
                    dispatch({type:"OPEN_DETAILS", payload:{main: poke, display:true, details:{...details, evolutionData}, evoIMG: {startPokemonEvo, firstEvoIMGs, secondEvoIMGs}}})

                    SetIsLoading(false)

                    }

                    catch (e) {


                        setHasEvolutionData(false)
                        dispatch({type:"OPEN_DETAILS", payload:{main: poke, display:true}})
                        console.log(e)
                        
                    }

                    
                    
                    
                    
                    
                    }}>










                    <img src={poke.sprites.other["official-artwork"].front_default } alt={poke.name} />
                    <h2>{poke.name}</h2>
                    <h3># {poke.order}</h3>
                    <div className="types">
                        {poke.types.map((type,idx) => {
                            return (<h4 key={idx} className="type-box">{type.type.name}</h4>)
                        })}
                    </div>
                </div>
            
        )
    })

    
}

export default PokemonGeneric