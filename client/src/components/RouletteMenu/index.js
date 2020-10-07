import React from 'react'
import "./style.css"

function RouletteMenu(props) {
    return (
        <div className = 'container roulMenuCon'>
            <form>
                <h3 id = 'betHeading'>Place your Bet</h3>
                <div className="form-group">
                    <label id = 'labels' htmlFor="numberBet">Number</label>
                    <input
                    type="number"
                    className="form-control numberBetInput"
                    id="numberBet"
                    name = "numberBet"
                    value = {props.numberBet}
                    onChange={props.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label id = 'labels' htmlFor="colorBet">Color</label>
                    <input
                    type="text"
                    className="form-control colorBetInput"
                    id="colorBet"
                    name = "colorBet"
                    value = {props.numberBet}
                    onChange={props.handleChange}
                    />
                </div>
                <button id = 'placeBetBtn' type = "submit" onClick = {props.handleBet}>Place Bet</button>
            </form>
            
        </div>
    )
}
export default RouletteMenu;