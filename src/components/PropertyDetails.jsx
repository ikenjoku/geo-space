import React, { useEffect, useRef } from 'react'
import { capitalize, propertyType } from '../utils'
import { actions } from '../context/GeoSpaceProvider.actions'
import {
  Titles,
  Attributes,
  CloseButton,
  MessageContainer,
  DetailContainer,
  PropertyContainer,
  StreetViewContainer
} from './styles'

function initialize(lat, lng) {
  const propertyPosition = { lat, lng };
  const map = new window.google.maps.Map(document.getElementById("property-street-view"), {
    center: propertyPosition,
    zoom: 14,
  });
  const panorama = new window.google.maps.StreetViewPanorama(
    document.getElementById("property-street-view"),
    {
      position: propertyPosition,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );
  map.setStreetView(panorama)
}


export default function PropertyDetails({ selectedProperty, dispatch }) {
  const streetViewRef = useRef()
  const { lat, lon } = selectedProperty || {}
  useEffect(() => {
    if (streetViewRef.current) {
      initialize(+lat, +lon)
    }
  }, [streetViewRef, lat, lon])

  const clearSelection = () => dispatch({ type: actions.CLEAR_SELECTION })

  return (
    <>
      { selectedProperty ?
      <>
      <PropertyContainer>
        <StreetViewContainer ref={streetViewRef} id="property-street-view" ></StreetViewContainer>
        <DetailContainer>
          <div>
            <Attributes>
              <div>
                <Titles>Beds</Titles>
                <p>{selectedProperty.beds || 'NA'}</p>
              </div>
              <div>
                <Titles>Baths</Titles>
                <p>{selectedProperty.baths || 'NA'}</p>
              </div>
            </Attributes>
            <Titles>Property Type</Titles>
            <p>{capitalize(selectedProperty[propertyType])}</p>
            <Titles>Sqm</Titles>
            <p>{selectedProperty.sqm}</p>
          </div>
          <div>
            <Titles>Address</Titles>
            <p>{selectedProperty.address}</p>
            <Titles>Price</Titles>
            <p>&euro; {selectedProperty.price || 'Not Available'}</p>
            <CloseButton onClick={clearSelection}>Close</CloseButton>
          </div>
        </DetailContainer>
      </PropertyContainer>
      </>
      :
      <MessageContainer>
        <Titles>Please select a property</Titles>
      </MessageContainer> }
    </>
  )
}
