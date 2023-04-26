import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//Configurando o router
import{
  createBrowserRouter, RouterProvider
}from "react-router-dom";

import Perfil from './pages/perfil/Perfil';

const router = createBrowserRouter([
{
  path:"/",
  element:<App/>
},
{
  path: "/perfil",
  element:<Perfil/>
}
]);

// const router = createBrowserRouter([
// {
//   path:"/",
//   element:<App/>,
//   children:[
//     {
//       path: "/perfil",
//       element:<Perfil/>
//     }
//   ]
// }
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
    
  </React.StrictMode>,
)
