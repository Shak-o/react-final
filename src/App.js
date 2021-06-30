import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './home-page/NavBar';
import React from 'react';
import UseToken from './authorisation/login/UseToken';
import Login from './authorisation/login/Login';
function App() {
    const { token, setToken } = UseToken();

    const checkLogin = () => {
        if (!token) {
            return <Login setToken={setToken} />;
        }
    };

    if (!token) {
        return <Login setToken={setToken} />;
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    {checkLogin()}
                    <NavBar />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
