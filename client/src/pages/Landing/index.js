import React, { Component } from 'react'
import Header from "../../components/Headers/MainHeader"
import SignUpForm from '../../components/SignUpForm'
import API from "../../util/API"
import Helmet from 'react-helmet';
import './style.css'

export class Landing extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });

        console.log(this.state)
    };

    handleSubmit = event => {
        event.preventDefault();
            API.saveAPI({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };



    render() {
        return (
            <div>
                <Header/>
                <Helmet bodyAttributes={{style: 'background-color: #242b64'}}/>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-6 offset-3">
                            <SignUpForm handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;

