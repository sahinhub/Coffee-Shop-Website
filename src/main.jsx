import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage.jsx';
import Home from './Pages/Home.jsx';
import AddCoffeePage from './Pages/AddCoffeePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch('http://localhost:5000/coffees');
          return res.json();
        }
      },
      {
        path: "/add-coffee",
        element: <AddCoffeePage></AddCoffeePage>,
      },
      {
        path: "/update-coffee",
        element: <Home></Home>,
        
      },
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
