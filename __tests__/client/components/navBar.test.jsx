import React from 'react';
import Navbar from '../../../client/components/navBar.jsx';
import { render, screen, fireEvent } from '@testing-library/react';

/* 
simulate a user clicking one/each of the buttons 
and expecting the console logged messages as a return
*/

/**
 * @jest-environment jsdom
 */

it('login button click triggers console log message', () => {
  render(<Navbar />);
  // rn this isn't emulating a click just yet
  // we want to emulate a user click, and then expect the appropriate return from the console.log
  // this will look for a button/component called "Login" then click it
  fireEvent.click(screen.getByText('Login'));
  // expect(screen.getByLabelText('yayyy logging in'));
  expect(handleLogin).toHaveBeenCalled;
});
