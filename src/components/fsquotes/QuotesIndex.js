import React from 'react'
import { getAllQuotes } from '../lib/api'
import QuotesCard from './QuotesCard'

function QuoteIndex () {
  const [quotes, setQuotes] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllQuotes()
      console.log(response.data)
      setQuotes(response.data)
      
    }
    getData()
  }, [])
  return (
    <section className="section">
      <div className="container">
        <div className ="column is-multiline">
          {quotes ? (
            quotes.map(quote => (
              <QuotesCard 
                key={quote.id}
                by={quote.by}
                character={quote.character}
                image={quote.image}
                quote={quote.quote}
                quoteId={quote.id}
                // director={episode.director}
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

export default QuoteIndex