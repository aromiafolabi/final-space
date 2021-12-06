import React from 'react'
import { Link } from 'react-router-dom'

function CharacterCard({ characterId, name, image, origin, gender }) {
  return (
    <div className="column is one-quarter-desktop is one-third-tablet">
      <Link to={`/character/${characterId}`}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-header-title">{name}</h3>
          </div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h5>Character Origin: {origin}</h5>
          <h5>Character Gender: {gender}</h5>
        </div>
        
      </Link>
    </div>
  )
}

export default CharacterCard