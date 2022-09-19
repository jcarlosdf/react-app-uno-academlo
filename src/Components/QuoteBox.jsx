import React from "react"
import "./components.css"

const QuoteBox = ({quote, renewQuote}) => {
    const color = `rgb(${quote[3]})`
    
    return (
        <div className="cards" style={{color : color}}>
            <p>{quote[1]}</p>
            <p><strong>{quote[2]}</strong></p>
            <button onClick={renewQuote} style={{backgroundColor : color}}>Next</button>
        </div>
    )
}

export default QuoteBox