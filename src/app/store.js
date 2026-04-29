import { configureStore } from "@reduxjs/toolkit";

import commentReduser from "../features/commits/commentsSlice";
import { todoApi } from "../services/todo";
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from "../features/counter/counterSlice";


const store = configureStore({
  reducer: {
    counterR: counterReducer,
    [todoApi.reducerPath]: todoApi.reducer,
   
   
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
  
});

setupListeners(store.dispatch)