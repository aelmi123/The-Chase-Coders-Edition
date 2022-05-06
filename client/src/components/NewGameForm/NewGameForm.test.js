/**
 * @jest-environment jsdom
 */
import { default as NewGameForm } from '.';
import { screen, render } from '@testing-library/react';

test('renders number of players', async () => {
    render(<NewGameForm />);
    const form = screen.queryByAll('How Many Players?')
    expect(form).toBeInTheDocument();
})

test('renders room name', () => {
    render(<NewGameForm />);
    const form = screen.queryByAll('Enter Room Name')
    expect(form).toBeInTheDocument();
})


test('name', async () => {
    render(<NewGameForm />);
    const form = screen.queryBy('name')
    expect(form).toBeInTheDocument();
})

