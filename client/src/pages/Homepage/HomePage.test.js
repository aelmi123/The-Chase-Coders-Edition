/**
 * @jest-environment jsdom
 */
 import { default as Homepage } from '.';
 import { render, screen } from '@testing-library/react';
 import { MemoryRouter } from 'react-router-dom';
 

describe('Homepage', () => {

    test('it renders the homepage', () => {
            render(<Homepage />, { wrapper: MemoryRouter })
            const heading = screen.getByRole('Header')
            expect(heading.textContent).toContain("Welcome to You're a Quizard, Harry!");
        });

    test('it renders the rules', () => {
        const rules = screen.getByRole('rules')
        expect(rules.textContent).toContain('The Rules');
    });

    test('renders rules paragraph', async () => {
        render(<Homepage/>);
        const rules = screen.getByText('The rules for this game are simple, have fun! You need a max of 4 players to play alongside you, but you can however play alone if you dare too. This quiz consists of several categories which you can choice yourself, along with the level of difficulty and players. You score is tracked across each question and will be displayed for you at the end. Make sure to get your answers right so you can top our leaderboard!')
        expect(rules).toBeInTheDocument();

    })
//test that they redirect??
});
