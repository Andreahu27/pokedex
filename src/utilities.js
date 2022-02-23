console.log("CHECK the link")




const types = ["fire"]


const getTypeWeakenesses = (types) => {

    const effectsTable = {

        normal: {
            normal: 1,
            fighting: 2,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 0,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1,
        },

        fighting: {
            normal: 1,
            fighting: 1,
            flying: 2,
            poison: 1,
            ground: 1,
            rock: 0.5,
            bug: 0.5,
            ghost: 1,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 2,
            ice: 1,
            dragon: 1,
            dark: 0.5,
            fairy: 2,
        },


        flying: {
            normal: 1,
            fighting: 0.5,
            flying: 1,
            poison: 1,
            ground: 0,
            rock: 2,
            bug: 0.5,
            ghost: 1,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 0.5,
            electric: 2,
            psychic: 1,
            ice: 2,
            dragon: 1,
            dark: 1,
            fairy: 1,
        },

        poison: {
            normal: 1,
            fighting: 0.5,
            flying: 1,
            poison: 0.5,
            ground: 2,
            rock: 1,
            bug: 0.5,
            ghost: 1,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 0.5,
            electric: 1,
            psychic: 2,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 0.5,
        },

        ground: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 0.5,
            ground: 1,
            rock: 0.5,
            bug: 1,
            ghost: 1,
            steel: 1,
            fire: 1,
            water: 2,
            grass: 2,
            electric: 0,
            psychic: 1,
            ice: 2,
            dragon: 1,
            dark: 1,
            fairy: 1,
        },

        rock: {
            normal: 0.5,
            fighting: 2,
            flying: 0.5,
            poison: 0.5,
            ground: 2,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 2,
            fire: 0.5,
            water: 2,
            grass: 2,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1,
        },

        bug: {
            normal: 1,
            fighting: 0.5,
            flying: 2,
            poison: 1,
            ground: 0.5,
            rock: 2,
            bug: 1,
            ghost: 1,
            steel: 1,
            fire: 2,
            water: 1,
            grass: 0.5,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1,
        },

        ghost: {
            normal: 0,
            fighting: 0,
            flying: 1,
            poison: 0.5,
            ground: 1,
            rock: 1,
            bug: 0.5,
            ghost: 2,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 2,
            fairy: 1,
        },

        steel: {
            normal: 0.5,
            fighting: 2,
            flying: 0.5,
            poison: 0,
            ground: 2,
            rock: 0.5,
            bug: 0.5,
            ghost: 1,
            steel: 0.5,
            fire: 2,
            water: 1,
            grass: 0.5,
            electric: 1,
            psychic: 0.5,
            ice: 0.5,
            dragon: 0.5,
            dark: 1,
            fairy: 0.5,
        },

        fire: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 2,
            rock: 2,
            bug: 0.5,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 2,
            grass: 0.5,
            electric: 1,
            psychic: 1,
            ice: 0.5,
            dragon: 1,
            dark: 1,
            fairy: 0.5,
        },

        water: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 0.5,
            water: 0.5,
            grass: 2,
            electric: 2,
            psychic: 1,
            ice: 0.5,
            dragon: 1,
            dark: 1,
            fairy: 1,
        },

        grass: {
            normal: 1,
            fighting: 1,
            flying: 2,
            poison: 2,
            ground: 0.5,
            rock: 1,
            bug: 2,
            ghost: 1,
            steel: 1,
            fire: 2,
            water: 0.5,
            grass: 0.5,
            electric: 0.5,
            psychic: 1,
            ice: 2,
            dragon: 1,
            dark: 1,
            fairy: 1,
        },

        electric: {
            normal: 1,
            fighting: 1,
            flying: 0.5,
            poison: 1,
            ground: 2,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 0.5,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 0.5,
            psychic: 1,
            ice: 1,
            dragon: 1,
            dark: 1,
            fairy: 1,
        },

        psychic: {
            normal: 1,
            fighting: 0.5,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 2,
            ghost: 2,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 0.5,
            ice: 1,
            dragon: 1,
            dark: 2,
            fairy: 1,
        },

        ice: {
            normal: 1,
            fighting: 2,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 2,
            bug: 1,
            ghost: 1,
            steel: 2,
            fire: 2,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 0.5,
            dragon: 1,
            dark: 1,
            fairy: 1,
        },

        dragon: {
            normal: 1,
            fighting: 1,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 1,
            fire: 0.5,
            water: 0.5,
            grass: 0.5,
            electric: 0.5,
            psychic: 1,
            ice: 2,
            dragon: 2,
            dark: 1,
            fairy: 2,
        },

        dark: {
            normal: 1,
            fighting: 2,
            flying: 1,
            poison: 1,
            ground: 1,
            rock: 1,
            bug: 0.5,
            ghost: 0.5,
            steel: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 0,
            ice: 1,
            dragon: 1,
            dark: 0.5,
            fairy: 2,
        },

        fairy: {
            normal: 1,
            fighting: 0.5,
            flying: 1,
            poison: 2,
            ground: 1,
            rock: 1,
            bug: 1,
            ghost: 1,
            steel: 2,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            psychic: 1,
            ice: 1,
            dragon: 0,
            dark: 0.5,
            fairy: 1,
        }
    }

    if (types.length === 1) {
        const typesArray = [effectsTable[types[0]]]

            const weaknessesArray = []

        for (let key in typesArray[0]) {
            weaknessesArray.push([key, typesArray[0][key]])
        }

        return weaknessesArray
    }

    else if (types.length === 2) {
        const typesArray = types.map(type => {return effectsTable[type]})

        for (let key of Object.keys(typesArray[0])) {
            typesArray[0][key] = typesArray[0][key] * typesArray[1][key]
        }

        const weaknessesArray = []

        for (let key in typesArray[0]) {
            weaknessesArray.push([key, typesArray[0][key]])
        }

        return weaknessesArray

    }


}

const generateNumbers = (num) => {
    let outputArray = [Math.floor(Math.random() * num)]

    while (outputArray.length < 50) { 
        const numToAdd = Math.floor(Math.random() * num)
        outputArray.push(numToAdd)
        }
    
    return [...new Set(outputArray)].slice(0,15)
}



export default getTypeWeakenesses
export {generateNumbers}