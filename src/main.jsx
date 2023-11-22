import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Root  from './Root/Root';
import Home from './Component/MultiPage/Home';
import Login from './Component/SinglePage/Login';
import SingUp from './Component/SinglePage/SingUp';
import About from './Component/SinglePage/About';
import Contact from './Component/SinglePage/Contact';
import EventDetails from './Component/SinglePage/EventDetails';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import ErrorPage from './Component/SinglePage/ErrorPage';
import Privacy from './Component/SinglePage/Privacy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
       
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/singup',
        element : <SingUp></SingUp>
      }
      ,
      {
        path : '/privacy',
        element : <Privacy></Privacy>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/event/:id',
        element : <PrivateRoutes><EventDetails></EventDetails>,</PrivateRoutes>,
        loader : () => fetch('../data.json')

      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
          <AuthProvider>

          <RouterProvider router={router} />

          </AuthProvider>

       
  </React.StrictMode>,
)
