import {createBrowserRouter} from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { AppLayout } from './pages/_layoutys/app'
import { AuthLayout } from './pages/_layoutys/auth'

export const router = createBrowserRouter([
  {
    path: '/', 
    element: <AppLayout/>,
    children: [
      { path: "/", element: <Dashboard/>, }
    ]
  },
  {
    path: '/', 
    element: <AuthLayout/>,
    children: [
      { path: "/sign-in", element: <SignIn/>, }
    ]
  }
  //{ path: "/", element: <Dashboard/>, },
  //{ path: "/sign-in", element: <SignIn/>, }
])