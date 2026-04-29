import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const commentSlice=createSlice({
    name:"cntSlice",
    initialState,
    reducers:{
        addComment:(state,action)=>{
            state.comments.push(action.payload.value)
        }
    }
})

export const { addComment }=commentSlice.actions;

const commentReduser=commentSlice.reducer;
export default commentReduser;
