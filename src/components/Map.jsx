import React from 'react'
import {
  Marker,
  Map as GoogleMap,
  GoogleApiWrapper
} from 'google-maps-react';
import { useGeoSpace } from '../context/GeoSpaceProvider'
import { actions } from '../context/GeoSpaceProvider.actions'

function Map({ google, data }) {
  const { dispatch } = useGeoSpace()

  const showMarkers = () => {
    return data.map((accommodation, index) => {
      return <Marker
        key={index}
        id={index}
        position={{
          lat: accommodation.lat,
          lng: accommodation.lon
        }}
        onClick={() => dispatch({
          type: actions.SELECT_ACCOMMODATION,
          payload: accommodation
        })}
      />
    })
  }

  return (
    <GoogleMap
      google={google}
      zoom={13}
      initialCenter={{
        lat: data[0]?.lat || 47.444,
        lng: data[0]?.lon || -122.176
      }}
    >
      {showMarkers()}
    </GoogleMap>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API_KEY
})(Map)