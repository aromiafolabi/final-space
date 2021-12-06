import React from 'react'
import { useParams } from 'react-router'
import { getSingleCharacter } from '../lib/api'

function CharacterShow () {
  const { characterId } = useParams()
  const [character, setCharacter] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getSingleCharacter(characterId)
        console.log(response.data)
        setCharacter(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [characterId])
  return (
    <section>
      <div className="container">
        {character ? (
          <div>
            <h2 className="title has-text-centered">
              {character.name}
            </h2>
            <hr />
            <div className="columns">
              <div className="column is-half"> 
                <figure className="image">
                  <img src={character.img_url} alt={character.name} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                    🍽
                    
                  </span> {' '}
                  Planet
                </h4>
                <p>{character.origin}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                      🌍
                  </span> {' '}
                    Species
                </h4>
                <p>{character.species}</p>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                    🍽
                    
                  </span> {' '}
                  Alias
                </h4>
            
                <p>{character.alias[Math.floor(Math.random() * character.alias.length)]}</p>
                
                
                <hr />
                <div className="column is-half">
                  <h4 className="title is-4">
                    <span role="img" aria-label="globe">
                      🌍
                    </span> {' '}
                    Abilities
                  </h4>
                  <p>{character.abilities[Math.floor(Math.random() * character.abilities.length)]}</p>
                  <p>{character.status}</p>
                </div>
              </div>
            </div>
          </div>
          
        ) : (
          <p>...loading</p>
        )
        }
      </div>
    </section>
  )
}

export default CharacterShow