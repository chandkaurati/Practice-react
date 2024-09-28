import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import  Contact from './pages/Contact.jsx'

const About = lazy(()=> import("./pages/About"))
// const Contact = lazy(()=> import("./pages/Contact.jsx").then(module => ({default : module.Contact})))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element : <Home/>
      }, 
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
)
