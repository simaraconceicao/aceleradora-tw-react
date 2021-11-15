import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react';
import App from './App'

describe('App component', () => {
  it('should render Hello', () => {
    render(<App />)

    const text = screen.queryByText('Hello,')

    expect(text).toBeInTheDocument()
  })

  it('should be able to render a name', () => {
    render(<App />)
    
    const input = screen.queryByPlaceholderText('digite seu nome')

    fireEvent.change(input, {
      target: {
        value: 'Simara'
      }
    })

    const text = screen.queryByText('Simara')
    expect(text).toHaveTextContent('Simara')
  })
})
