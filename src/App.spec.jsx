import React from 'react'
import {render, fireEvent} from "@testing-library/react";
import App from "./App";

jest.mock('./Components/Home/Home', () => ({Home: () => <div>Home component</div>}))
jest.mock('./Components/Profile/Profile', () => ({Profile: () => <div>Profile component</div>}))
jest.mock('./Components/About/About', () => ({About: () => <div>About component</div>}))

describe('App', () => {
    it('renders correctly', () => {
        const {container} = render(<App/>)
        expect(container.innerHTML).toMatch('Home component')
    })

    describe('when button clicked', () => {
        it('corresponding page is opened', () => {
            const {getByText, container} = render(<App/>)

            fireEvent.click(getByText('About'))
            expect(container.innerHTML).toMatch('About component')
            fireEvent.click(getByText('Profile'))
            expect(container.innerHTML).toMatch('Profile component')
        })
    })
})