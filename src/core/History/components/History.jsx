import React from 'react'

import { withContext } from '../../hocs/withContext'

import { actionDispatcher } from '../../../utils/actionDispatcher'

export class HistoryComponent extends React.Component {
  state = {
    currentPage: null
  }

  constructor(props) {
    super(props)

    const { pathname } = props.location
    this.state = { currentPage: pathname }
    actionDispatcher(this.props.context.dispatch, 'ON_CHANGE_PAGE', pathname)
  }

  static getDerivedStateFromProps(props, state) {
    const { currentPage } = state
    const { hash } = props.location
    const nextPage = hash || props.location.pathname

    if (nextPage === currentPage) return null

    actionDispatcher(props.context.dispatch, 'ON_CHANGE_PAGE', nextPage)
    return { currentPage: nextPage }
  }

  render() {
    return null
  }
}

export const History = withContext(HistoryComponent)
