/**
 * @jest-environment jsdom
*/

import React from 'react';
import { screen, render } from "@testing-library/react";
import { default as Leaderboard } from ".";

describe("Leaderboard page", () => {
    test("the table is rendered if the scores exist", async () => {
        jest.spyOn(React, "useEffect").mockImplementation((f) => f());
        render(<Leaderboard />);
        const table = screen.getByTestId("table");
        expect(table).toBeInTheDocument();
    });

    test('table rows exists', async () => {
        render(<Leaderboard />);
        const tr = screen.getByTestId("tr")
        expect(tr).toBeInTheDocument();
    })
});
