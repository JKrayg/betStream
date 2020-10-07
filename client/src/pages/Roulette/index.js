import React, { Component } from 'react'
import RouletteHeader from '../../components/Headers/RouletteHeader'
import RouletteTable from '../../components/RouletteTable'
import RouletteMenu from '../../components/RouletteMenu'
import Helmet from 'react-helmet'
import './style.css'

export class Roulette extends Component {
    render() {
        return (
            <div>
                <header>
                    <RouletteHeader/>
                </header>
                <Helmet bodyAttributes={{style: 'background-color:#385E3C'}}/>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-md-3'>
                            <RouletteMenu/>
                        </div>
                        <div className = 'col-md-8 offset-1'>
                            <RouletteTable/>
                        </div>
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default Roulette
