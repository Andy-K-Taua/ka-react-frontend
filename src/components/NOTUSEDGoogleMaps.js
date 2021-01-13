import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)
 
class GoogleMaps extends React.Component {

    state = {
        isMarkerShown: false,
        lat: '',
        lng: ''
    }

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
      } // componentDidMount

      this.setState(
        {lat: response.data.latitude, lng:response.data.longitude})

        // axios.get(config.url.GEO_URL)
        // .then(response => {
        //   console.log('Response: ', response);
        // })
        // .catch(console.warn(error))
      }

      componentDidMount() {
        this.delayedShowMarker()
      }
    
      delayedShowMarker = () => {
        setTimeout(() => {
          this.setState({ isMarkerShown: true })
        }, 3000)
      }
    
      handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
      }

    render(){
        return(

            <MyMapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
            />

        ) // return
    } // render
} // class GoogleMaps

export default GoogleMaps