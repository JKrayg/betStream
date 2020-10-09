import React from 'react'
// import rouletteTable from './rouletteTableImage.png'
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
            <div className = 'row rouletteTableGrid'>
                <div className = 'col-md-1'>
                    <div className = 'row'>
                        <button className = 'col-md-12 zeros'>00</button>
                        <button className = 'col-md-12 zeros'>0</button>
                    </div>
                </div>
                <div className = 'col-md-11'>
                    <div className = 'row rowOne'>
                        <button className = 'col tableRows' id = 'red' value = '3'>3</button>
                        <button className = 'col tableRows' id = 'black' value = '6'>6</button>
                        <button className = 'col tableRows' id = 'red' value = '9'>9</button>
                        <button className = 'col tableRows' id = 'red' value = '12'>12</button>
                        <button className = 'col tableRows' id = 'black' value = '15'>15</button>
                        <button className = 'col tableRows' id = 'red' value = '18'>18</button>
                        <button className = 'col tableRows' id = 'red' value = '21'>21</button>
                        <button className = 'col tableRows' id = 'black' value = '24'>24</button>
                        <button className = 'col tableRows' id = 'red' value = '27'>27</button>
                        <button className = 'col tableRows' id = 'red' value = '30'>30</button>
                        <button className = 'col tableRows' id = 'black' value = '33'>33</button>
                        <button className = 'col tableRows' id = 'red' value = '36'>36</button>
                        <button className = 'col tableRows' id = 'twoToOne'>2 to 1</button>
                    </div>
                    <div className = 'row rowTwo'>
                        <button className = 'col tableRows' id = 'black' value = '2'>2</button>
                        <button className = 'col tableRows' id = 'red' value = '5'>5</button>
                        <button className = 'col tableRows' id = 'black' value = '8'>8</button>
                        <button className = 'col tableRows' id = 'black' value = '11'>11</button>
                        <button className = 'col tableRows' id = 'red' value = '14'>14</button>
                        <button className = 'col tableRows' id = 'black' value = '17'>17</button>
                        <button className = 'col tableRows' id = 'black' value = '20'>20</button>
                        <button className = 'col tableRows' id = 'red' value = '23'>23</button>
                        <button className = 'col tableRows' id = 'black' value = '26'>26</button>
                        <button className = 'col tableRows' id = 'black' value = '29'>29</button>
                        <button className = 'col tableRows' id = 'red' value = '32'>32</button>
                        <button className = 'col tableRows' id = 'black' value = '35'>35</button>
                        <button className = 'col tableRows' id = 'twoToOne'>2 to 1</button>
                    </div>
                    <div className = 'row rowThree'>
                        <button className = 'col tableRows' id = 'red' value = '1'>1</button>
                        <button className = 'col tableRows' id = 'black' value = '4'>4</button>
                        <button className = 'col tableRows' id = 'red' value = '7'>7</button>
                        <button className = 'col tableRows' id = 'black' value = '10'>10</button>
                        <button className = 'col tableRows' id = 'black' value = '13'>13</button>
                        <button className = 'col tableRows' id = 'red' value = '16'>16</button>
                        <button className = 'col tableRows' id = 'red' value = '19'>19</button>
                        <button className = 'col tableRows' id = 'black' value = '22'>22</button>
                        <button className = 'col tableRows' id = 'red' value = '25'>25</button>
                        <button className = 'col tableRows' id = 'black' value = '28'>28</button>
                        <button className = 'col tableRows' id = 'black' value = '31'>31</button>
                        <button className = 'col tableRows' id = 'red' value = '34'>34</button>
                        <button className = 'col tableRows' id = 'twoToOne' vlaue = '2to1'>2 to 1</button>
                    </div>
                    <div className = 'row rowFour'>
                        <button className = 'col-md-4 rowFourElement' value = 'firstTwelve'>1st 12</button>
                        <button className = 'col-md-4 rowFourElement' value = 'secondTwelve'>2nd 12</button>
                        <button className = 'col-md-4 rowFourElement' value = 'thirdTwelve'>3rd 12</button>
                    </div>
                    <div className = 'row rowFive'>
                        <button className = 'col-md-2 rowFiveElement' value = 'oneToEighteen'>1 to 18</button>
                        <button className = 'col-md-2 rowFiveElement' value = 'even'>EVEN</button>
                        <button className = 'col-md-2 rowFiveElement' style = {{color: 'red'}} value = 'red'>RED</button>
                        <button className = 'col-md-2 rowFiveElement' style = {{color: 'black'}} value = 'black'>BLACK</button>
                        <button className = 'col-md-2 rowFiveElement' value = 'odd'>ODD</button>
                        <button className = 'col-md-2 rowFiveElement' value = 'nineteenToThirtySix'>19 to 36</button>
                    </div>
                </div>
                    {/* <img id = 'rouletteTable' src = {rouletteTable} alt = 'rouletteTable' /> */}
            </div>
        </div>
        
    )
}
export default RouletteTable;