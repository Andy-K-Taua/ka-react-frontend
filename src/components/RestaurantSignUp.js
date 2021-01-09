import React from 'react'
import axios from 'axios'

class RestaurantSignUp extends React.Component {

    state = {
        resName: '',
        resAddress: '',
        cuisine: '',
        menu_id: '',
        user: '' // update current user
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        axios.post(BASE_URL, {
            resName: this.state.name,
            resAddress: this.state.resAddress,
            cuisine: this.state.cuisine,
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="inputLabel">Restaurant Name</label>
                    <input type="text" onChange />
                    <br />
                    <label className="inputLabel">Restaurant Address</label>
                    <input type="text" onChange />
                    <br />
                    <label className="dropDown">Restaurant Owner or Customer?</label>
                    <select value={this.state.userType} onChange={this.handleChangeType}>
                        <option value="Select">Select</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Modern Australian">Modern Australian</option>
                        <option value="Vietnamese">Vietnamese</option>
                    </select>
                    <button>Create Your Restaurant</button>
                </form>
            </div>
        ) // return
    } // render
} // class RestaurantSignUp

export default RestaurantSignUp