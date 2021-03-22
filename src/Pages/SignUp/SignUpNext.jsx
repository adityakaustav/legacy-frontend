import React from 'react'
import './SignUpNext.css'
import CreateAccount from "../../Images/CreateAccount.png";
function SignUp() {
    return (
        <div className="mainDiv">
            <div className="LeftSide">
                <img src={CreateAccount} className="logo" alt="S'O'A UNIVERSITY" />
                <h1>Create Your account for a Seamless Experience</h1>
            </div>
            <div className="SignUpNextForm">
                <h1 className="text-SignUpNext">Create Account</h1>
                <hr />
                <form className="form" >
                    <div className="input-group">
                        <input type="text" name="regdNo" placeholder="Regd. No." />
                    </div>
                    <div className="input-group">
                        <input type="text" name="instituteName" placeholder="Institute Name" />
                    </div>
                    <div className="input-group">
                        <input type="text" name="programmeName" placeholder="Programme Name" />
                    </div>
                    <div className="input-group">
                        <input type="text" name="department" placeholder="Department" />
                    </div>
                    <div className="input-group">
                        <input type="text" name="branchName" placeholder="Branch Name" />
                    </div>
                    <div className="input-group">
                        <input type="number" name="year" placeholder="Year" />
                    </div>
                    <div className="input-group">
                        <input type="text" name="sectionName" placeholder="Section Name" />
                    </div>
                    <div className="out-buttons">
                        <a href="./SignUp.jsx">Back</a>
                        <button className="primary">Next</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
