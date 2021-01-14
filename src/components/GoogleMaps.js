import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {config} from '../Constants';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const RestaurantsNearMe = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

class GoogleMaps extends Component {
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

      // status.textContent = 'Locating';
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
  } // componentDidMount()

  // uses state lat and lng to get nearby restaurants
  componentDidUpdate(){
    // prevent infinite loop occuring
    if(this.state.lat === ''){
      axios.get(`${config.url.API_URL}/restaurants/location-search`, {params: {lat: this.state.lat, lng: this.state.lng}})
     .then(response => {
     console.log('Response', response);
     console.log('Nearby Restaurants: ', response.data);
      // loop through response.data array and push to the restaurants array in state
      this.setState({restaurants: response.data});
     })
     .catch(error => console.warn(error));
    } else {
   }
  } // componentDidUpdate()


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
          {
            this.state.restaurants.map(r => {
              return (
                <RestaurantsNearMe
                lat={r.lat}
                lng={r.lng}
                text={r.name}
                />
              )
            })
          }

        </GoogleMapReact>
      </div>
    );
  }
}

export default React.memo(GoogleMaps)
