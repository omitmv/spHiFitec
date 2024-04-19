import React from 'react'

import { AppContext, ErrorContext } from '../../Context/'

export const withContext = Component => props =>
  (
    <AppContext.Consumer>
      {state => {
        if (!state) {
          throw new Error(
            'withContext must be used within a AppContext.Provider'
          )
        }
        return (
          <ErrorContext.Consumer>
            {showError => (
              <Component {...props} context={state} showError={showError} />
            )}
          </ErrorContext.Consumer>
        )
      }}
    </AppContext.Consumer>
  )
