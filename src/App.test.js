import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { GeoSpaceProvider } from './context/GeoSpaceProvider'

test('renders App UI correctly', () => {
  const { getByText } = render(<GeoSpaceProvider><App /></GeoSpaceProvider>);
  const drawerElement = getByText(/Please select a property/i);
  const filterElement = getByText(/Fetching Data/i);
  expect(drawerElement).toBeInTheDocument();
  expect(filterElement).toBeInTheDocument();
});
