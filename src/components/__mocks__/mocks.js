export const mockProperty = {
  address: "120 SHEELIN GROVE BALLYBRACK GLENAGEARY CO. DUBLIN A96 V2T6",
  lat: "53.248862",
  lon: "-6.12526",
  sqm: "82",
  price: "306000",
  "property type": "TERRACED",
  "satellite image": "http://maps.google.com/maps?t=k&q=loc:53.248862,-6.12526",
  baths: "1",
  beds: "1"
}

export const stubDispatch = () => {}

export const mockProviderValue = {
state: {
  accommodations: [mockProperty],
  loadingAccommodations: false,
  errorLoadingAccommodations: false,
  bedOptions: ["1","2","3"],
  typeOptions: ['Apartment', 'Terraced'],
  bathroomOptions: ["1","2","3"],
  filteredAccommodations: null,
  selected_accommodation: null
},
dispatch: stubDispatch
}