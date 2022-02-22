import React from "react"
import { useContextGlobal } from "./Context"
import PokemonGeneric from "./PokemonGeneric"
import getTypeWeakenesses from "./utilities"

const Weakness = () => {

    const {pokemonDetails} =useContextGlobal()

    const weaknessesArray4 = getTypeWeakenesses(pokemonDetails.main.types.map(obj => obj.type.name)).filter(weaknessType => weaknessType[1] ===4)
    const weaknessesArray2 = getTypeWeakenesses(pokemonDetails.main.types.map(obj => obj.type.name)).filter(weaknessType => weaknessType[1] ===2)
    const weaknessesArray1 = getTypeWeakenesses(pokemonDetails.main.types.map(obj => obj.type.name)).filter(weaknessType => weaknessType[1] ===1)
    const weaknessesArray05 = getTypeWeakenesses(pokemonDetails.main.types.map(obj => obj.type.name)).filter(weaknessType => weaknessType[1] ===0.5)
    const weaknessesArray025 = getTypeWeakenesses(pokemonDetails.main.types.map(obj => obj.type.name)).filter(weaknessType => weaknessType[1] ===0.25)
    const weaknessesArray0 = getTypeWeakenesses(pokemonDetails.main.types.map(obj => obj.type.name)).filter(weaknessType => weaknessType[1] ===0)

    console.log("aaa", weaknessesArray4)

    return (
        <>

        {weaknessesArray4.length > 0 && (
            <>
                <div className="multip-container">
                <h4>x4</h4>
                <div className="weakness-area">{weaknessesArray4.map(item => <p className="type-box">{item[0]}</p>)}</div>           
                </div>
            </>
        )}

        {weaknessesArray2.length > 0 && (
            <>
                <div className="multip-container">
                <h4>x2</h4>
                <div className="weakness-area">{weaknessesArray2.map(item => <p className="type-box">{item[0]}</p>)}</div>           
                </div>
            </>
        )}


        {weaknessesArray1.length > 0 && (
            <>
                <div className="multip-container">
                <h4>x1</h4>
                <div className="weakness-area">{weaknessesArray1.map(item => <p className="type-box">{item[0]}</p>)}</div>           
                </div>
            </>
        )}


        {weaknessesArray05.length > 0 && (
            <>
                <div className="multip-container">
                <h4>x0.5</h4>
                <div className="weakness-area">{weaknessesArray05.map(item => <p className="type-box">{item[0]}</p>)}</div>
                </div>
            </>
        )}

        {weaknessesArray025.length > 0 && (
            <>
                <div className="multip-container">
                <h4>x0.25</h4>
                <div className="weakness-area">{weaknessesArray025.map(item => <p className="type-box">{item[0]}</p>)}</div>
                </div>
            </>
        )}

        {weaknessesArray0.length > 0 && (
            <>
                <div className="multip-container">
                <h4>x0</h4>
                <div className="weakness-area">{weaknessesArray0.map(item => <p className="type-box">{item[0]}</p>)}</div>     
                </div>
            </>
        )}

        </>
    )

}





    {/* <h4>X4</h4>
    {weaknessesArray.filter(weaknessType => weaknessType[1] ===4).map( wType => {
    console.log(wType)
    return (
        <p>{wType[0] === null ?  wType[0] : "none" }</p>
    )
    })}

    <h4>X2</h4>
    {getTypeWeakenesses(pokemonDetails.main.types.map(obj => obj.type.name)).filter(weaknessType => weaknessType[1] ===2).map( wType => {
        return (
            <p>{wType[0]}</p>
        )
    })}

    <h4>X1</h4>
    {getTypeWeakenesses(pokemonDetails.main.types.map(obj => obj.type.name)).filter(weaknessType => weaknessType[1] ===1).map( wType => {
    return (
        <p>{wType[0]}</p>
    )   
    })} */}



export default Weakness


