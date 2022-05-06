/**
 * @jest-environment jsdom
 */
 import { Results } from ".";
 import { screen, render } from '@testing-library/react';
 import {MemoryRouter} from 'react-router-dom'
 
 describe ('play again', () => {
 
     test('play again button works', async () => {
         render(<Results/>, {wrapper: <MemoryRouter/>})
         const button = screen.queryBy('button')
         expect(button).getByRole('button', { name: /submit/i })
 })
})
