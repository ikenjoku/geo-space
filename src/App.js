import React from 'react';
import { Filters, PieChart, PropertyDetails, Map } from './components'
import { Section, Drawer, MapView, DetailSection, DrawerFrame } from './components/styles'
import { useGeoSpace } from './context/GeoSpaceProvider'

function App() {
  const { state: {
    filteredAccommodations,
    selected_accommodation,
  }
} = useGeoSpace()

  return (
   <div>
     <Section>
       <Filters />
       {filteredAccommodations && <PieChart chartData={filteredAccommodations} />}
     </Section>
     <DetailSection>
       <DrawerFrame>
        <Drawer>
          <PropertyDetails
            selectedProperty={selected_accommodation}
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
