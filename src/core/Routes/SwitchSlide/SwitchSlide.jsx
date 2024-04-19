import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const SwitchSlide = ({ children }) => (
  <Route
    render={({ location }) => <Routes location={location}>{children}</Routes>}
  />
)
