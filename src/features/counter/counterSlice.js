//actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};


export const countSclice=createSlice({
    name:"cntSlice",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            state.count=0;
        }
    }
})

export const{increment,decrement,reset}=countSclice.actions;
const counterReducer = countSclice.reducer;
export default counterReducer;


