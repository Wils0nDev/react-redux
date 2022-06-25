import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  times:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   increment: (state) => {
     state.counter += 1
   },
   decrement : (state)=> { 
     state.counter -= 1
   },
   incrementbydos : (state,action)=> { 
     state.counter += action.payload
   }
  },
})

export const { increment,decrement,incrementbydos  } = counterSlice.actions