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
import ViewDetails from './Pages/ViewDetails.jsx';
import UpdateCoffee from './Pages/UpdateCoffee.jsx';
import SignUp from './Pages/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-coffee",
        element: <AddCoffeePage></AddCoffeePage>,
      },
      {
        path: "/update-coffee",
        element: <Home></Home>,
        
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
        
      },
      {
        path: "/coffee/view-details/:id",
        element: <ViewDetails></ViewDetails>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
        
      },
      {
        path: "/coffee/update/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
        
      },
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
