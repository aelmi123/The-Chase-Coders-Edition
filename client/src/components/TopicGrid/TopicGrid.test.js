import { TopicGrid } from ".";
import { screen, render } from '@testing-library/react;'
import {MemoryRouter} from 'react-router-dom';

describe('navigateQuiz', () => {

    test('It navigates to the quiz page', () => {
        render(<TopicGrid/>, {wrapper:MemoryRouter})
        let navigate = 
    })
})
