import React from "react"
import { useContextGlobal } from "./Context"

const Nav = () => {

    const {search, handleSearch, getPokemon, getPokemonRand, generateNumbers} = useContextGlobal()

    return (

        <>
        <nav className="nav">

            <div className="nav-left">
                <div className="pokemonIMG IMG4"><img src={require("./assets/regice.png")} alt="#" /></div>
                <div className="pokemonIMG IMG3"><img src={require("./assets/reshiram.png")} alt="#" /></div>
                <div className="pokemonIMG IMG2"><img src={require("./assets/magmortar.png")} alt="#" /></div>
                <div className="pokemonIMG IMG1"><img src={require("./assets/oh-ho.png")} alt="#" /></div>
   

            </div>


            <div className="nav-center">

                <img className="logo" src={require("./assets/pokemon.png")} alt="#" />

                <form action="" className="search-form">

                    <input className="input-search" type="text" value={search} placeholder="Search a pokemon..." 
                            onChange={(e) => {
                                handleSearch(e)
                            }} 
                    />

                    <section className="buttons-sec">

                        <button className="search-btn"
                                onClick={ (e)=> {
                                    e.preventDefault()
                                    getPokemon()}
                                }>
                                Search
                        </button>

                        <button className="random-btn" 
                                onClick={ (e) => {
                                    e.preventDefault()
                                    getPokemonRand()}
                                }
                            >Random</button>

                    </section>

                </form>

                

            </div>
            
            <div className="nav-right">
                <div className="pokemonIMG IMG1"><img src={require("./assets/rayquaza.png")} alt="#" /></div>
                <div className="pokemonIMG IMG2"><img src={require("./assets/tyranitar.png")} alt="#" /></div>
                <div className="pokemonIMG IMG3"><img src={require("./assets/lapras.png")} alt="#" /></div>
                <div className="pokemonIMG IMG4"><img src={require("./assets/swampert.png")} alt="#" /></div>


            </div>


        
        
        
        </nav>

        </>
    )
}

export default Nav