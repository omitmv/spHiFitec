import { Reducer } from '../../Context/components/Reducer'

export class HistoryReducer extends Reducer {
  constructor() {
    super('history', {
      pageHistory: [],
      lastPage: null,
      originPage: null,
      currentPage: null,
      desiredPage: null,
      nativeBack: null
    })
  }

  reduce(state, { type, payload }) {
    switch (type) {
      case 'ON_CHANGE_PAGE':
        return {
          ...state,
          lastPage: state.currentPage,
          currentPage: payload,
          desiredPage: payload,
          nativeBack: false
        }
      case 'ON_BACK':
        return {
          ...state,
          desiredPage: state.lastPage,
          nativeBack: true
        }
      case 'ON_FORWARD':
        return {
          ...state,
          desiredPage: state.originPage,
          nativeBack: false
        }
      case 'ON_ORIGIN_PAGE':
        return {
          ...state,
          originPage: payload
        }
      default:
        return state
    }
  }
}
