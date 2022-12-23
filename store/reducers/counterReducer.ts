import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

interface CounterReduceState {
  value: number;
}

const initialState: CounterReduceState = {
  value: 0,
};

export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')
export const incrementByAmount = createAction<number>('counter/incrementByAmount')

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++
    })
    .addCase(decrement, (state) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})

export default counterReducer;