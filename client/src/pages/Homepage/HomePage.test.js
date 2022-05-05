// import {default as Homepage } from '.';
// import { MemoryRouter } from 'react-router-dom';

// export const RouterWrapper = ({ children }) => (
//   <MemoryRouter>{children}</MemoryRouter>
// );

// import { RouterWrapper } from '../path/to/test/utils';

// it("inserts text in h2", () => {
//   const { getByTestId, getByText } = render(
//     <Header title="title" />,
//     { wrapper: RouterWrapper }
//   );

//   expect(getByTestId("title")).toHaveTextContent("title");
//   expect(getByText("title")).toContain("Welcome to You're a Quizard, Harry!");
// });

import { default as Homepage } from '.';
import { screen, render } from '@testing-library/react';

describe('Homepage', () => {

    test('it renders', () => {
        render(<Homepage />)
        const form = screen.getByClass('form');
        expect(form).toBeInTheDocument();
    });

});

