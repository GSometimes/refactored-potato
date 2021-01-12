import React from 'react'
import { Link } from 'react-router-dom'


const Portfolio = () => {
    return (
        <>
            <div className="portfolioContainer">

            </div>
            <h1>Cheese</h1>
            <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </>
    )
}

export default Portfolio
