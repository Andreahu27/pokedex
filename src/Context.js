import React, { useState, useContext, useEffect, useReducer, useRef } from "react"
import axios from "axios"
import { generateNumbers } from "./utilities"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [pokemons, SetPokemons] = useState([])
    const [prevPokemons, SetPrevPokemons] = useState([])

    let [pageCount, setPageCount] = useState(1)

    const [hasEvolutionData, setHasEvolutionData] = useState(false)

    const [randIndexes, setRandIndexes] = useState(generateNumbers(1000))

    const [pokeList, setPokeList] = useState([])
    const [originalList, setOriginalList] = useState([])

    const [isRendered, setIsRendered] = useState(true)

    const [search, setSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }














    const [pokemonDetails, dispatch] = useReducer(reducer, { display: false, main: {}, details: {}, evoIMG: [] });

    function reducer(state, action) {

        if (action.type === "OPEN_DETAILS") {
            return { ...state, display: action.payload.display, main: action.payload.main, details: action.payload.details, evoIMG: action.payload.evoIMG }
        }

        if (action.type === "CLOSE_DETAILS") {
            return { ...state, display: action.payload.display }
        }
    }



    const [isLoading, SetIsLoading] = useState(true)

    const [loadMore, setLoadmore] = useState("https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0")

    const handleReset = async () => {

        SetIsLoading(true)
        setLoadmore("https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0")

        SetPokemons([])
        setSearch("")

        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0")
        const data = await response.data

        const createPokemon = (data) => {
            return data.results.forEach(async (pokemon) => {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
                const pokeData = await response.data
                SetPokemons(prevVal => { return [...prevVal, pokeData] })
            })
        }

        createPokemon(data)
        setLoadmore(data.next)
        SetIsLoading(false)
        setIsSearching(false)
    }



    ////



    const getPokemonRand = async () => {
        const pokemonListRes = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=2000&offset=0")
        const pokemonLength = await pokemonListRes.data.results.length

        const pokemonUrls = await pokemonListRes.data.results.map(poke => poke.url)

        setRandIndexes(generateNumbers(pokemonLength))

        SetIsLoading(true)
        setIsSearching(true)

        SetPokemons([])

        randIndexes.map(async (idx) => {
            const response = await axios.get(pokemonUrls[idx])
            const pokeData = await response.data
            SetPokemons(prevVal => { return [...prevVal, pokeData] })
        })

        SetIsLoading(false)
    }

    const getPokemonBack = async () => {
        SetIsLoading(true)
        SetPokemons(prevPokemons)
        SetIsLoading(false)



    }


    const getPokemon = async () => {

        setPageCount(prevV => prevV + 1)

        // SetIsLoading(true)

        const response = await axios.get(loadMore)
        const data = await response.data

        const createPokemon = (data) => {
            // SetPrevPokemons(pokemons)
            // SetPokemons([])
            data.results.forEach(async (pokemon) => {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
                const pokeData = await response.data
                SetPokemons(prevVal => { return [...prevVal, pokeData] })
                // SetPokemons(prevVal => {return [...prevVal, pokeData]})
            })
        }

        if (search === "") {
            createPokemon(data)
            setLoadmore(data.next)
            setIsSearching(false)

        }

        else {

            setIsSearching(true)
            SetPokemons([])
            pokeList.forEach(async (pokemon) => {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
                const pokeData = await response.data
                SetPokemons(prevVal => { return [...prevVal, pokeData] })
                // SetPokemons(prevVal => {return [...prevVal, pokeData]})
            })

        }

        const resPokeList = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=2000&offset=0")
        const dataPokeList = await resPokeList.data
        const pokeListArr = dataPokeList.results.map(poke => poke.name)
        setPokeList(pokeListArr)
        setOriginalList(pokeListArr)


        SetIsLoading(false)

        if (pageCount > 1) {
            setTimeout(() => { window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' }) }, 400)
        }



    }


    const filterSearch = () => {
        setPokeList(originalList.filter(pokemonString => pokemonString.includes(search)))
    }

    useEffect(() => filterSearch(), [search])

    useEffect(() => getPokemon(), [])

    // useEffect(() => 
    //     setTimeout(() => {window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: 'smooth'})}, 300) 
    // , [pokemons])





    return (
        <AppContext.Provider value={{
            pokemons, SetIsLoading, isLoading, getPokemon, search, handleSearch, pokeList, setSearch,
            handleReset, isSearching, getPokemonRand, generateNumbers, dispatch, pokemonDetails, isRendered, setIsRendered, getPokemonBack, pageCount, setPageCount, hasEvolutionData, setHasEvolutionData
        }}
        >{children}
        </AppContext.Provider>
    )

}

const useContextGlobal = () => {
    return useContext(AppContext)
}

export { AppProvider, useContextGlobal }