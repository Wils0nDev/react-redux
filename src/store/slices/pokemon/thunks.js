import axios from "axios"
import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemon } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    console.log(page)
    return async(dispatch, getState ) => {
        dispatch(startLoadingPokemon())
        //realizar peticion http
        console.log(`pokemon?limit=${page}&offset=${page * 10}`)
        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)
        dispatch(setPokemons({pokemons: data.results, page: page + 1 } ))
    }


}