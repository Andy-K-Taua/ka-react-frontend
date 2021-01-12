import React from 'react'
import axios from 'axios'
import {config} from '../Constants'


class SignUpForm extends React.Component {

    state = {
        authorisation: '',
        name: '',
        email: '',
        password: '',
        password_confirmation:''
    }

    handleUseNamChangeType = (ev) => {
        this.setState(
            {name: ev.target.value}
        );
    }
    handleUseEmaChangeType = (ev) => {
        this.setState(
            {email: ev.target.value}
        );
    }
    handlePassConChangeType = (ev) => {
        this.setState(
            {password_confirmation: ev.target.value}
        );
    }
    handlePassChangeType = (ev) => {
        this.setState(
            {password: ev.target.value}
        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const params={user: {name:this.state.name, email: this.state.email, password: this.state.password, password_confirmation: this.state.password_confirmation, authorisation: 2}};
        axios.post(`${config.url.API_URL}/users`, params)
        .then(res => console.log('res:', res))
        .catch(console.warn)
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

                    <label className="inputLabel">User Name</label>
                    <input type="text" onChange={this.handleUseNamChangeType} />
                    <br />

                    <label className="inputLabel">User Email</label>
                    <input type="text" onChange={this.handleUseEmaChangeType} />
                    <br />

                    <label className="inputLabel">User password</label>
                    <input type="text" onChange={this.handlePassChangeType} />
                    <br />

                    <label className="inputLabel">Confirmation password</label>
                    <input type="text" onChange={this.handlePassConChangeType} />
                    <br />


                  <button>Create User Account</button>

                </form>
                </div>
            </div>

        ) // return
    } // render
} // classSignUpForm

export default SignUpForm
