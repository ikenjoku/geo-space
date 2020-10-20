import React from 'react';
import { Filters, PieChart, PropertyDetails, Map } from './components'
import { Section, Drawer, MapView, DetailSection, DrawerFrame } from './components/styles'
import { useGeoSpace } from './context/GeoSpaceProvider'

function App() {
  const { state: {
    filteredAccommodations,
    selected_accommodation,
  }, dispatch
} = useGeoSpace()

  return (
   <div>
     <Section>
       <Filters />
       {filteredAccommodations && <PieChart chartData={filteredAccommodations} />}
     </Section>
     <DetailSection>
       <DrawerFrame>
        <Drawer selectedProperty={selected_accommodation}>
          <PropertyDetails
            selectedProperty={selected_accommodation}
            dispatch={dispatch}
          />
        </Drawer>

       </DrawerFrame>
       <MapView>
         { filteredAccommodations && <Map data={filteredAccommodations} />}
       </MapView>
     </DetailSection>
   </div>
  )
}

export default App
