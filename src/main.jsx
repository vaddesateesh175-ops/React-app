import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Tasklist from "./features/tascklist/tasklist.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/tasks",
        element: <Tasklist />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);