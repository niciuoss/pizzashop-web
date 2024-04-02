import './global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import {HelmetProvider, Helmet} from 'react-helmet-async'
export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop"/>
      <RouterProvider router={router}/>
    </HelmetProvider>
  )
}