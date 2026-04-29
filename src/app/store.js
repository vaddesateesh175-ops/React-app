import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
     
    ),
});
setupListeners(store.dispatch);
export default store;