import React from 'react'
import PortfolioItem from './PortfolioItem'

const items = [
    { name:"1 Data Viz", desc:"Lots of bars", url:"", src:"" },
    { name:"2 Tetris", desc:"Lots of blocks", url:"", src:"" },
    { name:"3 One More", desc:"Lots more", url:"", src:"" },
    { name: "4 Square", desc: "More things", url: "", src:""},
]

const renderItems = () => {
    return items.map(({ name, desc, url, src }) => (
        <PortfolioItem
            name={name}
            desc={desc}
            url={url}
            src={src}
        />
    )
)}

const Portfolio = (props) => {
    return (
        <div>
            <h1>Portfolio</h1>
            {renderItems()}
        </div>
    )
}

export default Portfolio

