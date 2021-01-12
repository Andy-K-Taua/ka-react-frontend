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
}

export default React.memo(GoogleMaps)

