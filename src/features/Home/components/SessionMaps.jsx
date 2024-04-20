import React from 'react'

export class SessionMaps extends React.Component {
  render() {
    return (
      <div>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.015136671972!2d-44.18007368508007!3d-22.54833198518816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f6a5c3d0e5f%3A0x6e7e7a0e6e7e7a0!2sRua%20S%C3%A3o%20Paulo%2C%2025%20-%20Col%C3%B4nia%2C%20Barra%20Mansa%20-%20RJ%2C%2027353-005!5e0!3m2!1sen!2sbr!4v1635401234567!5m2!1sen!2sbr"
          height="500px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    )
  }
}
