import React from "react";
import {AuthProvider, AuthContext} from "./withAuth";
import {act} from "@testing-library/react";
import {render, fireEvent, screen} from "@testing-library/react";


describe('AuthContext', () => {
    describe('#logIn', () => {
        it('sets isLoggedIt to false', () => {


            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => (
                            <>
                           <span data-testid='is-logged-in'>
                               {String(value.IsLoggedIn)}
                           </span>
                                <button data-testid='login' onClick={() => value.logIn('mail', 'pass')}>login</button>
                            </>
                        )}
                    </AuthContext.Consumer>
                </AuthProvider>
            )

            expect(screen.getByTestId('is-logged-in')).toHaveTextContent('false')

            const loginButton = screen.getByTestId('login')
            fireEvent.click(loginButton)

            expect(screen.getByTestId('is-logged-in')).toHaveTextContent('true')

        })
    })
})
