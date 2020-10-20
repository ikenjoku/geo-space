import React from 'react';
import { render } from '@testing-library/react';
import Filters from '../Filters'
import { GeoSpaceContext, GeoSpaceProvider } from '../../context/GeoSpaceProvider'
import { mockProviderValue } from '../__mocks__/mocks'

test('renders correctly when fetching properties', async () => {
  const { getByText } = render(
  <GeoSpaceProvider>
    <Filters />
  </GeoSpaceProvider>);
  const filterElement = getByText(/Fetching Data/i);
  expect(filterElement).toBeInTheDocument();
});

test('renders filters when properties have been fetched', async () => {
  const { getByDisplayValue } = render(
  <GeoSpaceContext.Provider value={mockProviderValue}>
    <Filters />
  </GeoSpaceContext.Provider>);
  expect(getByDisplayValue('Number of beds')).toBeInTheDocument()
  expect(getByDisplayValue('Number of baths')).toBeInTheDocument()
  expect(getByDisplayValue('Property type')).toBeInTheDocument()
});
