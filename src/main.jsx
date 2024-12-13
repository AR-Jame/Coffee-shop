import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import AddCoffeeForm from './AddCoffeeForm';
import CardDetails from './CardDetails';
import Update from './Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element:<Home />,
        loader: () => fetch('http://localhost:5000/coffees'),
      },
      {
        path: '/addcoffees',
        element: <AddCoffeeForm />
      },
      {
        path: "/coffees/:id",
        element: <CardDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update />,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
