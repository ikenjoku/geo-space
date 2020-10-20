import React from 'react';
import { render } from '@testing-library/react';
import PropertyDetails from '../PropertyDetails'

test('renders drawer correctly when no property is selected', () => {
  const { getByText } = render(<PropertyDetails />);
  const drawerElement = getByText(/Please select a property/i);
  expect(drawerElement).toBeInTheDocument();
});
