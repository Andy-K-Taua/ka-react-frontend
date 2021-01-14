<<<<<<< HEAD
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {config} from '../Constants'
import axios from 'axios'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const RestaurantsNearMe = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};
 
class SimpleMap extends Component {
  state = {
    lat: '',
    lng: '',
    zoom: 11,
    restaurants: []
  }

  // geolocation of the user
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
  } // componentDidMount()

  // uses state lat and lng to get nearby restaurants
  componentDidUpdate(){
    if(this.state.lat === null){
      axios.get(`${config.url.API_URL}/restaurants/location-search`, {params: {lat: this.state.lat, lng: this.state.lng}})
     .then(response => {
     console.log('Response', response);
     console.log('Nearby Restaurants: ', response.data);
      // loop through response.data array and push to the restaurants array in state
      this.setState({
        restaurants: response.data
      });
     })
     .catch(error => console.warn(error));
    }
  }

 
  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDR191L1r3AZQruQBZ38g7SekFs78a5b3U' }}
          defaultCenter={{lat: this.state.lat, lng: this.state.lng}}
          defaultZoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text="Your Location"
          />
          {/* Loop through array in state and render a component for each */}
          <RestaurantsNearMe
            lat={this.state.lat}
            lng={this.state.lng}
            text=''
          />
        </GoogleMapReact>
      </div>
    );
  }
=======
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Install the API in your terminal via the command "npm i -S @react-google-maps/api"

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -38.0229,
    lng: 144.3964
};

function GoogleMaps() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ''
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds)
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
         mapContainerStyle={containerStyle}
         center={center}
         zoom={10}
         onLoad={onLoad}
         onUnmount={onUnmount}
        >
        {/* This is where we add our restaurants */}
            <></>
        </GoogleMap>
    ) : <></>
>>>>>>> cc0decf6a6316176075d13e445f17f149d8c194b
}

export default React.memo(GoogleMaps)

