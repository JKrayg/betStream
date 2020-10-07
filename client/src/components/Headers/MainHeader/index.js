import React from 'react'
import './style.css'

function Header() {
    return (
        <header className = "mainHead">
            <div className = "col-md-6">
                <h1 className = "betStreamTitle"><span className = "Bet">Bet</span><span className = "Stream">Stream</span></h1>
            </div>
        </header>
    )
}

export default Header;
