import React from  'react'
import PropTypes from 'prop-types'

function App({title, imgSource, text , url}) {
  return (
    <div className="card text-center bg-dark">
      <img src={imgSource} alt=""></img> 
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-primary">
            {
              text ? text: 'los mejores ciclistas' 
            }
          </p>
          <a href={url} className="btn btn-outline-secondary" target="_blank">
            Go to this website
          </a>
        </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url:  PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default App