import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {config} from '../Constants'
import axios from 'axios'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844
    },
    zoom: 11
  };

  componentDidMount(){
    if(!navigator.geolocation) {
      // TODO: Set error message into state
      // status.textContent = 'Geolocation is not supported by your browser';
    } else {

      // status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(
       (position) => {
         // success
         this.setState({
           lat: position.coords.latitude,
           lng: position.coords.longitude
        });
      }, // end of success
      () => {
        // error
        console.log('Could not access GPS data');
      });
    } // else
    // request to see nearby restaurants
    axios.get(`${config.url.API_URL}/restaurants/location-search`, {params: {lat: -38.01, lng: 144.38}})
     .then(response => {
     console.log('Response', response)
     })
     .catch(error => console.warn(error));
 } // componentDidMount()
 
  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDR191L1r3AZQruQBZ38g7SekFs78a5b3U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;