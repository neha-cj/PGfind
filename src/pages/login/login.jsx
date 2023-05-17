import React from 'react';
import "../login/login.css";
import google from "../../images/google.png"

export default function login(){
    return(
        <div className="login">
            <div className="login-cont">
                <div className="login-head">
                    <h1>Welcome to PgFInd</h1>
                    <p>
                        Find your perfect PG in seconds with PGfind the ultimate 
                        time-savinf app for locsting nearby Pg!
                    </p>
                </div>
                <div className="login-button">
                    <button className="login-button">
                        <img alt="" src={google}></img>
                        <p>Sign Up with google</p>
                    </button>
                    
                </div>
            </div>
        </div>

    )
}