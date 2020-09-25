import React from 'react'

function SignUpForm() {
    return (
        <div className = "col-md-6 offset-3">
            <form id = "signUpForm">
                <div class="form-group">
                    <label for="firstname">firstname</label>
                    <input type="text" class="form-control" id="firstname" placeholder=". . ."/>
                </div>
                <div class="form-group">
                    <label for="lastname">lastname</label>
                    <input class="form-control" id="lastname"/>
                </div>
                <div class="form-group">
                    <label for="email">email</label>
                    <input class="form-control" id="email"/>
                </div>
                <div class="form-group">
                    <label for="username">create username</label>
                    <input class="form-control" id="username"/>
                </div>
                <div class="form-group">
                    <label for="password">create password</label>
                    <input class="form-control" id="password"/>
                </div>
                <div class="form-group">
                    <label for="confirm">confirm password</label>
                    <input class="form-control" id="confirm"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type = "submit" onClick = {handleSubmit}></button>
            </form>
        </div>
    )
}
export default SignUpForm;