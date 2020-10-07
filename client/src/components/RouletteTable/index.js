import React from 'react'
import rouletteTable from './rouletteTableImage.png'
import rouletteWheel from './rouletteWheelImage.webp';
import './style.css'

function RouletteTable() {
    return (
        <div className = 'container tableCon'>
            <div className = 'row'>
                <div className = 'col-md-12'>
                    <div className = 'row'>
                        <div className = 'col-md-3'>
                            <div id = 'winningResult'>
                                <h3 style = {{fontSize: '50px'}} id = 'winningNumber'>36</h3>
                                <h4 style = {{color: 'red', fontSize: '40px'}} id = 'winningColor'>Red</h4>
                            </div>
                        </div>
                        <div className = 'col-md-9'>
                            <img id = 'rouletteWheel' src = {rouletteWheel} alt = 'rouletteWheel' />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-md-12'>
                    <img id = 'rouletteTable' src = {rouletteTable} alt = 'rouletteTable' />
                </div>
            </div>
        </div>
        
    )
}
export default RouletteTable;