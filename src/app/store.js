
import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "../services/userApi.js";

// import userReduser from "../features/user/userSlice.js";
import userReduser from "../features/user/userSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";



const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    userR: userReduser,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware
    ),
  
});

setupListeners(store.dispatch)
export default store;