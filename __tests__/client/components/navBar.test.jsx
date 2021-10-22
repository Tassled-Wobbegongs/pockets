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

const handleLogin = () => console.log('yayyy logging in');
const handleLogout = () => console.log('yayyyy logging out');
const handleSignup = () => console.log('going into signup');

describe('testing buttons on navbar', () => {
  it('login button click triggers console log message', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText('Login'));
    expect(handleLogin).toHaveBeenCalled;
  });

  it('logout button click triggers console log message', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText('Log Out'));
    expect(handleLogout).toHaveBeenCalled;
  });

  it('signup button click triggers console log message', () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText('Signup'));
    expect(handleSignup).toHaveBeenCalled;
  });
});
