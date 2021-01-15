import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {config} from '../Constants';
import axios from 'axios';


 
const MyLocation = ({ text }) => <div>{text}</div>;
const RestaurantNearMe = ({ restaurant }) => {
  return (
    <div>{restaurant.name}
      <img src='http://www.fillmurray.com/25/25'/>
    </div>
  );
}; // RestaurantNearMe()

// const handleApiLoaded = (map, maps) => {
//   // use map and maps objects
// };

class GoogleMaps extends Component {
  state = {
    lat: '',
    lng: '',
    zoom: 9,
    restaurants: [],
    prevProps: [],
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
         const params = {params: {lat: position.coords.latitude, lng: position.coords.longitude}}    
         axios.get(`${config.url.API_URL}/restaurants/location-search`, params)
         .then(response => {
            console.log(params)
            console.log('Response', response);
            console.log('Nearby Restaurants: ', response.data);
              // push to the restaurants array in state
            this.setState({restaurants: response.data});
         })
         .catch(error => console.warn(error));
      }, // end of success
      () => {
        // error
        console.log('Could not access GPS data');
      });
    } // else 
  } // componentDidMount()

  // 

  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDR191L1r3AZQruQBZ38g7SekFs78a5b3U' }}
          defaultCenter={{lat: this.state.lat, lng: this.state.lng}}
          defaultZoom={this.state.zoom}
          // yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <MyLocation
            lat={this.state.lat}
            lng={this.state.lng}
            text="Your Location"
          />
          {/* Loop through array in state and render a component for each */}
          
          {
            this.state.restaurants.map(r => {
              return (
                <RestaurantNearMe key={r.id}
                lat={r.latitude}
                lng={r.longitude}
                restaurant={r}
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
