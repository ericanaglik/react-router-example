import React from 'react'
import './PortfolioItem.css'

const PortfolioItem = ({ url, name, desc, src }) => {
    return (
        <div className="portfolio-item">
            <a href={url}>
            <h1>{name}</h1>
            <p>{desc}</p>
            </a>
            <img src={src} width="200" height="200" />
        </div>
    )
}

export default PortfolioItem