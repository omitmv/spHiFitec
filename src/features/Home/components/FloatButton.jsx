import React from 'react'
import { Button } from 'react-bootstrap'
import { FaAngleDoubleUp } from 'react-icons/fa'

export class FloatButton extends React.Component {
  render() {
    return (
      <Button
        href="#home"
        variant="success"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px'
        }}
      >
        <FaAngleDoubleUp style={{ fontSize: '2rem' }} />
      </Button>
    )
  }
}
