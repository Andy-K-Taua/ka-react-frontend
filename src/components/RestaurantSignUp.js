import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/restaurants'

class RestaurantSignUp extends React.Component {

    state = {
        resName: '',
        resAddress: '',
        resCuisine: ''
    }

    handleResNameChange = (ev) => {
        this.setState({
            resName: ev.target.value
        });
    } 

    handleResAddressChange = (ev) => {
        this.setState({
            resAddress: ev.target.value
        });
    } 

    handleResCusChange = (ev) => {
        this.setState({
            resCuisine: ev.target.value
        });
    } 

    handleSubmit = (ev) => {
        ev.preventDefault();
        axios.post(BASE_URL, {
            resName: this.state.name,
            resAddress: this.state.resAddress,
            resCuisine: this.state.cuisine
        });
        console.log('handleSubmit', this.handleSubmit);
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

                    <label className="dropDown">Restaurant Owner or Customer?</label>
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