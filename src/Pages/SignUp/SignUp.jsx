import React from 'react'
import './SignUp.css'
import CreateAccount from "../../Images/CreateAccount.png";
function SignUp() {
    return (
        <div className="mainDiv">
            <div className="LeftSide">
                <img src={CreateAccount} className="logo" alt="S'O'A UNIVERSITY" />
                <h1>Create Your account for a Seamless Experience</h1>
            </div>
            <div className="SignUpForm">
                <h1 className="text-SignUp">Create Account</h1>
                <hr />
                <form className="form" >
                    <div className="input-group">
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <input type="number" name="number" placeholder="Mobile Number" />
                    </div>
                    <div className="out-buttons">
                        <button className="primary">Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
