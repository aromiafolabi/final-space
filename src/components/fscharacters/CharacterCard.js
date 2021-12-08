import React from 'react'
import { Link } from 'react-router-dom'

function CharacterCard({ characterId, name, image, origin }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/character/${characterId}`}>
        <div className="charcter-card is-dark">
          <div className="card-header is-dark">
            <h3 className="card-header-title is-dark">{name}</h3>
          </div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="character-card">
          <h4 className="card-header-title">{origin}</h4>
        </div>
        
      </Link>
    </div>
  )
}

export default CharacterCard