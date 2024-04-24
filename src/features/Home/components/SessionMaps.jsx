import React from 'react'

import {} from './sessionMapsController'

export class SessionMaps extends React.Component {
  render() {
    return (
      <div>
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1842.5052689972695!2d-44.228739562953265!3d-22.541277998386835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDMyJzI4LjYiUyA0NMKwMTMnNDAuOSJX!5e0!3m2!1spt-BR!2sbr!4v1713985508665!5m2!1spt-BR!2sbr"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    )
  }
}
