import './global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import {HelmetProvider, Helmet} from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider.tsx'
export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey='cakeshop-theme' defaultTheme='dark'>
        <Helmet titleTemplate="%s | pizza.shop"/>
        <Toaster richColors/>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </HelmetProvider>
  )
}