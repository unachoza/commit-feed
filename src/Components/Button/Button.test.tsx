import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button, {PropsButton} from './Button'


describe("Button", () => {
    let props: PropsButton;

    beforeEach(() => {
        props = {
            onClick: (e) => console.log(e),
            text: "Search"
        };
    });

    it("should render correctly", () => {
        const { asFragment } = render(
            <Button {...props}></Button>
        );
        expect(asFragment()).toMatchSnapshot();
    });

});

// describe("Button", () => {
//     <div></div>
// } 