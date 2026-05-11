// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MacroNeural title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MacroNeural/i);
    expect(titleElement).toBeInTheDocument();
});
