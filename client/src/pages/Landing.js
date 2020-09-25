import React, { Component } from 'react'
import Header from "../components/Header"
import SignUpForm from '../components/SignUpForm'

export class Landing extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className = "container">
                    <SignUpForm/>
                </div>
            </div>
        )
    }
}

export default Landing;

