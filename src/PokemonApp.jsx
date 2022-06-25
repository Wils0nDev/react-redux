import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';
import {  increment } from './store/slices/counter/counterSlice'


export const  PokemonApp =  () => {

  const { isLoading, pokemons = [], page } =  useSelector( (state)=> state.pokemons )
  
  const dispatch = useDispatch();
  
  const handlePagination = () =>{ 
    dispatch(getPokemons(page))
  }

  useEffect(() => {
    dispatch( getPokemons() )
  }, []);
  return (
    <>
     <h1>Pokemon App</h1>
     <hr />
     <span>Loading: {isLoading ? 'true' : ' false '}</span>
     <ul>
       {
        pokemons.map( p => (
          <li key={p.name}>{p.name}</li>
        ))
       }
     </ul>
     <button onClick={handlePagination}>{page}</button>
    </>
  )
}
