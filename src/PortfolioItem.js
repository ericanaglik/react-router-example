import React from 'react'
import './PortfolioItem.css'

const PortfolioItem = ({ url, name, desc }) => {
    return (
        <div className="portfolio-item">
            <a href={url}>
            <h1>{name}</h1>
            <p>{desc}</p>
            </a>
        </div>
    )
}