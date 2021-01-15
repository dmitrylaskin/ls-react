import React from 'react';

const Home = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" size="28"/>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" size="28"/>
            </form>
        </div>
    );
};

export default Home;
