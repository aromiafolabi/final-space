import React from 'react'
import { useParams } from 'react-router'
import { getAllQuotes, getSingleCharacter } from '../lib/api'
import { createNotification } from '../lib/notification'

function CharacterShow () {
  
  const { characterId } = useParams()
  const [character, setCharacter] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const characterResponse = await getSingleCharacter(characterId)
        setCharacter(characterResponse.data)
        const quoteResponse = await getAllQuotes()
        const quotesArray = quoteResponse.data.filter(quote => {
          if (quote.by === characterResponse.data.name){
            return quote
          }
          
        })
        createNotification(quotesArray[Math.floor(Math.random() * quotesArray.length)].quote)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [characterId])
  


  return (
    <section className="section">
      <div className="container">
        {character ? (
          <div>
            <h2 className="title has-text-centered"> {character.name} </h2>
            <hr />
            <div className="columns">
              <div className="column is-half"> 
                <figure className="image">
                  <img src={character.img_url} alt={character.name} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                  🌍
                    
                  </span> {' '}
                  Origin
                </h4>
                <p>{character.origin}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="alien">
                    👽
                  </span> {' '}
                    Species
                </h4>
                <p>{character.species}</p>
                <hr />              
                <h4 className="title is-4">
                  <span role="img" aria-label="lightning">
                    ⚡️                    
                  </span> {' '}
                  Abilities
                </h4>
                <p>{character.abilities[Math.floor(Math.random() * character.abilities.length)]}</p>                
                <hr />               
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                      @
                  </span> {' '}
                    Alias
                </h4>
                <p>{character.alias[Math.floor(Math.random() * character.alias.length)]}</p>
              </div>
            </div>
            <hr />            
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