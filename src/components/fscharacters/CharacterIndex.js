import React from 'react'
import { getAllCharacters } from '../lib/api'
import CharacterCard from './CharacterCard'


function CharacterIndex () {
  
  const [characters, setCharacters] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState('')
  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllCharacters()      
      setCharacters(response.data)
      
    }
    getData()
  }, [])
  
  
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const filteredCharacters = (characters) => {
    return characters.filter(character => {
      return character.name.toLowerCase().includes(searchValue.toLowerCase())
    })
  }
  return (   
    <section className="section">
      <div className="columns">
        <div className="column is-one-third">       
          <input className="field input is-normal" placeholder="Search..." onChange={handleSearch} />           
        </div>
      </div>
      <div className="container">           
        <div className ="columns is-multiline">
          {characters ? 
            filteredCharacters(characters).map(character => (
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
            : 
            <p>...loading</p>
          }
        </div>
      </div>
    </section>
  
  )
}

export default CharacterIndex