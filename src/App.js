import React from 'react';
import { Filters, PieChart, PropertyDetails } from './components'
import { Section, Drawer, MapView, DetailSection } from './components/styles'
function App() {

  const selectedProperty = {
    address: '120 SHEELIN GROVE BALLYBRACK GLENAGEARY CO. DUBLIN A96 V2T6',
    lat: '53.248862',
    lon: '-6.12526',
    sqm: '82',
    price: '306000',
    'property type': 'TERRACED',
    'satellite image': 'http://maps.google.com/maps?t=k&q=loc:53.248862,-6.12526',
    baths: '1',
    beds: '1'
  }

  return (
   <div>
     <Section>
       <Filters />
       <PieChart />
     </Section>
     <DetailSection>
       <Drawer>
         <PropertyDetails
          selectedProperty={selectedProperty}
        />
       </Drawer>
       <MapView>Map</MapView>
     </DetailSection>
   </div>
  );
}

export default App;
