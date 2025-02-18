import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Add } from "../pages/Add";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/add", element: <Add /> },
  { path: "*", element: <p>Ruta no encontrada (404)</p> },
]);
