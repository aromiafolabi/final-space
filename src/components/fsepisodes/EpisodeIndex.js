import React from 'react'
import { getAllEpisodes } from '../lib/api'
import EpisodeCard from './EpisodeCard'

function EpisodeIndex () {
  const [episodes, setEpisodes] = React.useState(null)
  const [selectedSeason, setSelectedSeason] = React.useState('all')
  
  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllEpisodes()
      setEpisodes(response.data)
      
    }
    getData()
  }, [])
  
  const handleSelect = (e) => {
    setSelectedSeason(e.target.value)
  }

  const filteredEpisodes = (episodes) => {
    return episodes.filter(episode => {
      return episode.air_date.includes(selectedSeason) || selectedSeason === 'all'
    })
  }

  
  return (
    <section className="section">
      <div className="container">
        <div className="field select is-medium">
          <select onChange={handleSelect}>
            <option value="all">All Seasons</option>
            <option value="2018">Season One</option>
            <option value="2019">Season Two</option>
          </select>
        </div>
        <div className ="column is-multiline">
          {episodes ? (
            filteredEpisodes(episodes).map(episode => (
              <EpisodeCard 
                key={episode.id}
                name={episode.name}
                image={episode.img_url}
                writer={episode.writer}
                director={episode.director}
                date={episode.air_date}  
                episodeId={episode.id} 
                           
            
        
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