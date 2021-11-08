import { render, screen } from '@testing-library/react'
import React from 'react';
import App from './App'

describe('Hello world', () => {
  it('should render hello world', () => {
    render(<App />);
    
    const helloElement = screen.getByText('Hello, World!')
    expect(helloElement).toBeInTheDocument()
  })
})
