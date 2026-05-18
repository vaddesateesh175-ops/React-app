import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./features/user/Login.jsx";
import Photos from "./features/photos/photos.jsx";
import Books from "./features/Book/Books";
import Mybooks from "./features/Mybooks/Mybooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />, 
      },
      {
        path: "/photos",
        element: <Photos />, 
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path:"/mybooks",
        element :<Mybooks />,
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} >
       <App />
    </RouterProvider>
  </Provider>,
);