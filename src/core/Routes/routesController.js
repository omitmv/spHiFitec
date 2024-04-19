import { lazy } from 'react'

export const lazily = loader => {
  return new Proxy(
    {},
    {
      get: (_, prop) => {
        return lazy(() => loader().then(module => module[prop]))
      }
    }
  )
}
