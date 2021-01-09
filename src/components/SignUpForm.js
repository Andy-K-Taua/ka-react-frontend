import React from 'react'
import axios from 'axios'

class SignUpForm extends React.Component {

    state = {
        userType: '',
        userName: '',
        userEmail: '',
        userPassword: ''
    }

    handleChangeType = (ev) => {
        this.setState(
            {userType: ev.target.value}
        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

    }
    render(){
        return(
            <div>
                <hr />
                <h2>Sign Up Here</h2>
                <div>

                <form onSubmit={this.handleSubmit}>
                    <label className="dropDown">Restaurant Owner or Customer?</label>
                    <select value={this.state.userType} onChange={this.handleChangeType}>
                        <option value="Select">Select</option>
                        <option value="Restaurant Owner">Restaurant Owner</option>
                        <option value="Customer">Customer</option>
                    </select>
                    <br />
                    

                </form>
                </div>
            </div>

        ) // return
    } // render
} // classSignUpForm

export default SignUpForm