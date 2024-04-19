import moment from 'moment'

export const globalInitializer = ({ dispatch, auth }) => {
  try {
    moment.locale('pt-br')
  } catch (error) {
    console.error(error)
  }
}

export const setNativeBackListener = (context, callToast) => {
  try {
    if (context.auth.isAuthenticated) {
      window.onpopstate = () => {
        callToast('Você está logado')
      }
    }
  } catch (error) {
    console.error(error)
  }
}
