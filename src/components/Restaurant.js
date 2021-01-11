import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom'
import RestaurantSignUp from './RestaurantSignUp'

class Restaurant extends React.Component {

    componentDidMount(){
        axios.get(`${config.url.API_URL}/restaurants`, {})
    }

    render(){
        return(
            <div>

            </div>
        ) // return

    } // render

} // class Restaurant

export default Restaurant