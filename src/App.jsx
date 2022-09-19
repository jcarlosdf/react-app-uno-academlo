import { useState } from 'react'
import './App.css'
import quotes from '../public/quotes.json'
import QuoteBox from './Components/QuoteBox'

const randomRGB = () =>  Math.random() * 200 | 0 

const quoteBody = () => {
    const colors = [randomRGB(), randomRGB(), randomRGB()]
    const randomIndex = Math.random() * quotes.length | 0
    return [randomIndex, quotes[randomIndex].quote, quotes[randomIndex].author, colors]
}

function App() {

  const [randomQuote, setRandomQuote] = useState(quoteBody)
  
  const renewQuote = () => {
    setRandomQuote(quoteBody)
  }
  
  return (
    <div className="backScreen" style={{backgroundColor:`rgb(${randomQuote[3]})`}}>
     <QuoteBox quote={randomQuote} renewQuote={renewQuote} />
    </div>
  )
}

export default App
