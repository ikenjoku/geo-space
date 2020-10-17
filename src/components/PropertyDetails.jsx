import React from 'react'
import {
  Titles,
  Attributes,
  MessageContainer,
  DetailContainer
} from './styles'
export default function PropertyDetails({ selectedProperty }) {
  return (
    <>
      {/* <HeaderTitle>Property Details</HeaderTitle> */}
      { selectedProperty ?
      <DetailContainer>
        <div>
          <Titles>Google Street View</Titles>
          <img src="http://picsum.photos/300/200" alt="Map view" />
        </div>
        <div>
          <Attributes>
            <div>
              <Titles>Beds</Titles>
              <p>{selectedProperty.beds}</p>
            </div>
            <div>
              <Titles>Baths</Titles>
              <p>{selectedProperty.baths}</p>
            </div>
          </Attributes>
          <Titles>Address Type</Titles>
          <p>Single Occupancy</p>
          <Titles>Property Type</Titles>
          <p>{selectedProperty['property type']}</p>
          <Titles>Sqm</Titles>
          <p>{selectedProperty.sqm}</p>
        </div>
        <div>
          <Titles>Address</Titles>
          <p>{selectedProperty.address}</p>
          <Titles>Price</Titles>
          <p>&euro; {selectedProperty.price}</p>
        </div>
      </DetailContainer> :
      <MessageContainer>
        <Titles>Please select a property</Titles>
      </MessageContainer> }
    </>
  )
}
