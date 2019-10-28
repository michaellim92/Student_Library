import React, { Component } from 'react';

export default class Login extends Component{
    render() {
        return(
            <div className="login-form">
                <form>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" placeholder="Enter Email" required autoFocus /><br /><br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="Enter Password" required /><br /><br />
                    <input type="checkbox" id="keeplogin" name="keeplogin" />

                    <label htmlFor="keeplogin">Keep Email</label>
                    <input type="submit" value="login" /><br />

                
                </form>
            </div>
        )
    }
}