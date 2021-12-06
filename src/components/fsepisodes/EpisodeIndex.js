import React from 'react'
import { getAllEpisodes } from '../lib/api'
import EpisodeCard from './EpisodeCard'

function EpisodeIndex () {
  const [episodes, setEpisodes] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllEpisodes()
      console.log(response.data)
      setEpisodes(response.data)
      
    }
    getData()
  }, [])
  return (
    <section className="section">
      <div className="container">
        <div className ="column is-multiline">
          {episodes ? (
            episodes.map(episode => (
              <EpisodeCard 
                key={episode.id}
                name={episode.name}
                image={episode.img_url}
                writer={episode.writer}
                director={episode.director}
                // origin={character.origin}
                // characterId={character.id}
                // alias={character.alias}
                // abilities={character.abilities}
                // status={character.status}
            
        
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

export default EpisodeIndex