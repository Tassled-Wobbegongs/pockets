import React from 'react';
import Total from '../../../client/components/Total.jsx';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

/*
Pass in props to Total, and then check if the total prop is rendered correctly
*/

// i'm the dummy data

//bruhhhhh. I AAAAAAMMMM
//i've been looking at documentation/videos of react testing and i still have no idea how to implement
// react test library docs kinda SUCK ASS
//100%
// they put the 2 monke in charge of testing

afterEach(cleanup);

const totalState = {
  total: 1000,
};

describe('testing total.jsx', () => {
  test('displaying the props correctly', () => {
    const { getByText } = render(<Total {...totalState} />);
    getByText('Total: $1000');
  });
});
