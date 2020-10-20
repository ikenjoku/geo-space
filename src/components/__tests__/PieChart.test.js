import React from 'react';
import { render } from '@testing-library/react';
import PieChart from '../PieChart'
import { mockProperty } from '../__mocks__/mocks'

test('renders PieChart with data', async () => {
  const { getAllByRole } = render(<PieChart chartData={[mockProperty]} />);
  expect(getAllByRole('generic')[2]).toHaveClass("recharts-wrapper")
});