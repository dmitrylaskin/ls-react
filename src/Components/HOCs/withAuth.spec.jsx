import React from "react";
import {AuthProvider, AuthContext} from "./withAuth";
import {render} from "@testing-library/react";
import {act} from "@testing-library/react";

describe('AuthContext', () => {
    describe('#logIn', () => {
        it('sets isLoggedIt to false', () => {
            let isLoggedIn;
            let logIn;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logIn = value.logIn;
                            return null

                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )

            expect(isLoggedIn).toBe(false)
            act(() => {
                logIn('mail', 'pass')
            })
            expect(isLoggedIn).toBe(true)

        })
    })
})
