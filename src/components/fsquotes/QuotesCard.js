import React from 'react'
import { Link } from 'react-router-dom'

function QuoteCard({ quoteId, quote, image, by, character }) {
  return (
    <div className="column is one-quarter-desktop is one-third-tablet">
      <Link to={`/episode/${quoteId}`}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-header-title">{quote}</h3>
          </div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={image} alt={by} />
          </figure>
        </div>
        <div className="card-content">
          <h5>Character: {character}</h5>
          <h5>By: {by}</h5>
        </div>
        
      </Link>
    </div>
  )
}

export default QuoteCard