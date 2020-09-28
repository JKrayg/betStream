import React from 'react'

function SignUpForm(props) {
    return (
        <form id = "signUpForm">
            <h3>Sign Up</h3>
            <div className="form-group">
                <label htmlFor="firstname">firstname</label>
                <input
                type="text"
                className="form-control"
                id="firstname"
                name = "firstname"
                value = {props.firstname}
                onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastname">lastname</label>
                <input
                className="form-control"
                id="lastname"
                value = {props.lastname}
                name = "lastname"
                onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                className="form-control"
                id="email"
                value = {props.email}
                name = "email"
                onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="username">create username</label>
                <input
                className="form-control"
                id="username"
                value = {props.username}
                name = "username"
                onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">create password</label>
                <input
                className="form-control"
                id="password"
                value = {props.password}
                name = "password"
                onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPw">confirm password</label>
                <input
                className="form-control"
                id="confirmPw"
                value = {props.confirmPw}
                name = "confirmPw"
                onChange={props.handleChange}
                />
            </div>
            <button type = "submit" onClick = {props.handleSubmit}>Submit</button>
        </form>
    )
}
export default SignUpForm;