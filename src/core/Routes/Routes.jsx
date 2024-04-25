import React, { useReducer } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalContext } from '../Context'
import { authReducer, authInitialState } from '../auth'

import { Home } from '../../features/Home'
import { SendEmail } from '../../features/SendEmail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/send-email',
    element: <SendEmail />
  }
])

export const Routes = () => {
  const [stateAuth, dispatchAuth] = useReducer(authReducer, authInitialState)

  return (
    <GlobalContext.Provider value={{ stateAuth, dispatchAuth }}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  )
}
