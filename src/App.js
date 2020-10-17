import React from 'react';
import { Filters, PieChart } from './components'
import { Section, Drawer, MapView, DetailSection } from './components/styles'
function App() {
  return (
   <div>
     <Section>
       <Filters />
       <PieChart />
     </Section>
     <DetailSection>
       <Drawer>Side detail</Drawer>
       <MapView>Map</MapView>
     </DetailSection>
   </div>
  );
}

export default App;
