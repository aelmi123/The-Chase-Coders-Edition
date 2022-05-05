import { Leaderboard } from '.';
import { screen, render } from '@testing-library/react';



// global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve({
//         value: "Testing something!"
//     })
// }));

// describe("Test", () => {

//     it('Should have proper description after data fetch', async () => {

//         // need to put mock logic here to make it work

//         render(<Leaderboard/>);
//         const description = await screen.findByTestId('description');
//         expect(description.textContent).toBe("Testing something!");
//     });
// })
