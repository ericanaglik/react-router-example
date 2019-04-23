import React from 'react'

const items = [
    { name:"Data Viz", desc:"Lots of bars", url:"" },
    { name:"Tetris", desc:"Lots of blocks", url:"" },
    { name:"One More", desc:"Lots more", url:"" },
]

const renderItems = () => {
    return items.map(({ name, desc, url }) => (
        <PortfolioItem
            name={name}
            desc={desc}
            url={url}
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

