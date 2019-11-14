import React from 'react';
import { Link } from 'react-router-dom'

export default function login() {
        return(
            <div className="login-form">
                <form>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" placeholder="Enter Email" required autoFocus /><br /><br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="Enter Password" required /><br /><br />
                    <label htmlFor="keeplogin">Keep Email</label>
                    <input type="checkbox" id="keeplogin" name="keeplogin" /><br />
                    <input type="submit" value="login" />
                    <Link id="temp-log" to="/home">Use this to login</Link>
                
                </form>
            </div>
        )
}