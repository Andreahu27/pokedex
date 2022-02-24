import React from "react"
import { useContextGlobal } from "./Context"
import PokemonGeneric from "./PokemonGeneric"
import getTypeWeakenesses from "./utilities"
import Weakness from "./Weakness"
import Evolution from "./Evolution"
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';
import { FaRegWindowClose } from "react-icons/fa"









const Home = () => {

    

    const {setSearch, handleReset, isSearching, isLoading, dispatch, displayPokemons, setDisplayPokemons,
        pokemonDetails,displayDetails,bottomRef, setIsRendered, pokemons,
        hasEvolutionData, setHasEvolutionData, setIsSearching, loadMoreFunc} =useContextGlobal()

    if (isLoading) {
        return (
            <h1>Loading your pokemons</h1>
        )
    }

    // const types = ["flying", "fire"]


    // const types = pokemonDetails.main
    // console.log("jj", types)





    // console.log(getTypeWeakenesses(types))

    return (
        <>
            <div className="homeDiv">

            {pokemonDetails.display && (

            <div className= {`${pokemonDetails.display ? "pokemon-details-div":"pokemon-details-div display-no"}`} >

                <div className="bio-nav">

                    <div className="bio-nav-name">
                        <h1>{pokemonDetails.main.name}</h1>
                        {hasEvolutionData && (<h3>{pokemonDetails.details.generation.name}</h3>)}
                        <h3>ID: #{pokemonDetails.main.id}</h3>
                    </div>
                    <img className="img-bio" src={pokemonDetails.main.sprites.other.dream_world.front_default || pokemonDetails.main.sprites.other["official-artwork"].front_default } alt="" />
                    <div onClick={() => {
                    setDisplayPokemons(true)    
                    dispatch({type:"CLOSE_DETAILS", payload: {display:false}})
                    }}
                    ><FaRegWindowClose className="close-icon"/></div>

                </div>

            <div className="bio-main">

                <div className="bio-bio">

                    <h2>BIO</h2>


                    {hasEvolutionData && (
                    <p>{pokemonDetails.details.flavor_text_entries.filter(item => item.language.name==="en")[0].flavor_text}</p>)}
                    
                    
                    <p>Base experience: {pokemonDetails.main.base_experience}</p>
                    <p>Height (cm): {pokemonDetails.main.height * 10}</p>
                    <p>Weight (kg): {Math.round((pokemonDetails.main.weight * 0.1)*100)/100}</p>


                    {hasEvolutionData && (
                    <>
                    <p>Base happiness: {pokemonDetails.details.base_happiness}</p>
                    <p>Capture rate: {pokemonDetails.details.capture_rate}</p>
                    <p>Growth rate: {pokemonDetails.details.growth_rate.name}</p>
                    </>
                    )}



                    {/* <p>Habitat: {pokemonDetails.details.habitat.name === undefined? "not available" : "available" }</p>
                    <p>Rarity: {pokemonDetails.main.held_items[0].version_details[0].rarity === undefined? "not available" : "available" }</p> */}
  

                    {/* <p>Id: {pokemonDetails.main.held_items[0].version_details[0].rarity || "not available"}</p> */}

                    <div className="types-section">
                        <h2>TYPES</h2>
                        <section className="types-container">
                            {pokemonDetails.main.types.map(type => {
                                return (
                                    <h5 className="type-box">{type.type.name}</h5>
                            )
                            })}
                        </section>
                    </div>






                    
                    <div className="abilities-section">            
                        <h2>ABILITIES</h2>

                        <section className="types-container">
                            {pokemonDetails.main.abilities.map(item => {
                                return (
                                <p className="abilities-box">{item.ability.name}</p>
                        )
                        })}
                        </section>
                    </div>

                </div>


                <div className="bio-game-stats">
                    
                    <div className="stats-section">

                        <h2>STATS</h2>

                        <section className="stats-container">
                            {pokemonDetails.main.stats.map(stat => {
                                return (
                                    <article className="stats-text">{stat.stat.name}: {stat.base_stat}</article>
                                )
                            })}
                            <article>Total base stats: {pokemonDetails.main.stats.map(stat => stat.base_stat).reduce((a,b) => a+b)}</article>
                        </section>

                    </div>


                    <div className="strengths-weak-section">
                        <h2>STRENGTHS AND RESISTANCES</h2>
                        <h3>By damage received</h3>
                        <Weakness/>
                    </div>




                </div>

                {hasEvolutionData && (<Evolution/>)}


                


                
            </div>


               
            </div>

        )}







            <main className="home">
                {pokemons.length === 0  ? (
                    <>
                    <p id="no-search-p">Oops no Pokemons found, please retry with a different search...<br></br> </p>
                    <img id="no-search-img" src={require("./assets/snorlax-sleeping.png")}  alt="#" />
                    </>)
                :  <PokemonGeneric/>}    
            </main>



            {displayPokemons && (
            <div id="load-more-btn" className="buttons-div" ref={bottomRef}>

                        <button onClick={() => {
                            setIsRendered(prevVal => !prevVal)
                            loadMoreFunc()
                            }} 
                            className= {`${isSearching ? "load-more display-no" : "load-more"}`}

                            
                        >LOAD MORE</button>

                        <button onClick={() => {
                            handleReset()
                            }} 
                            className="load-more"
                            
                        >RESET</button>

            </div>
            )}






            </div>

        </>
    )
}

export default Home