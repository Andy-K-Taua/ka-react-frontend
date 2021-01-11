import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
// import {config} from '../Constants'


class RestaurantSignUp extends React.Component {

    state = {
        name: '',
        address: '',
        cuisine: '',
        menu_id: '',
        user_id: ''
    }

    handleResNameChange = (ev) => {
        this.setState({
            name: ev.target.value
        });
    }

    handleResAddressChange = (ev) => {
        this.setState({
            address: ev.target.value
        });
    }

    handleResCusChange = (ev) => {
        this.setState({
            cuisine: ev.target.value
        });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        axios.post(`${config.url.API_URL}/restaurants`, {
            name: this.state.name,
            address: this.state.address,
            cuisine: this.state.cuisine,
        })
        .then(res => console.log('res:', res))
        .catch(console.warn)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label className="inputLabel">Restaurant Name</label>
                    <input type="text" onChange={this.handleResNameChange} />
                    <br />

                    <label className="inputLabel">Restaurant Address</label>
                    <input type="text" onChange={this.handleResAddressChange} />
                    <br />

                    <label className="dropDown">Cuisine Type</label>
                    <select value={this.state.userType} onChange={this.handleResCusChange}>
                        <option value="Select">Select</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Modern Australian">Modern Australian</option>
                        <option value="Vietnamese">Vietnamese</option>
                    </select>

                    <br />
                    <button>Create Your Restaurant</button>
                </form>
            </div>
        ) // return
    } // render
} // class RestaurantSignUp

export default RestaurantSignUp
