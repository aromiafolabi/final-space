import React from 'react'
import { getAllCharacters } from '../lib/api'
import CharacterCard from './CharacterCard'

function CharacterIndex () {
  const [characters, setCharacters] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllCharacters()
      console.log(response.data)
      setCharacters(response.data)
      
    }
    getData()
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div className ="column is-multiline">
          {characters ? (
            characters.map(character => (
              <CharacterCard 
                key={character.id}
                name={character.name}
                gender={character.gender}
                image={character.img_url}
                origin={character.origin}
                characterId={character.id}
                alias={character.alias}
                abilities={character.abilities}
                status={character.status}
                
            
              />
            ))
          ) : (
            <p>...loading</p>
          )}
        </div>

      </div>
    </section>
  )
}

export default CharacterIndex