import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Components/Login';
import Register from './Components/Register';
import { Home } from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

