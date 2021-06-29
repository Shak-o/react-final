import Input from '../search/Input';
import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import HomePage from './Home';
import TaskForm from '../task/add-task/TaskForm';
import { NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../app/store';
import Logout from '../authorisation/logout/Logout';

class NavBar extends Component {
    state = {
        page: <HomePage />,
    };
    getPage = (event) => {
        if (event.target.textContent === 'Home') {
            this.setState({ page: <HomePage /> });
            console.log('clicked Gome');
        }
        if (event.target.textContent === 'Create') {
            this.setState({ page: <TaskForm /> });
            console.log('clicked Create');
        }
    };
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink
                            to="/"
                            className="navbar-brand"
                            onClick={this.getPage}
                            style={{ cursor: 'pointer' }}>
                            Home
                        </NavLink>
                        <NavLink
                            to="/create"
                            className="navbar-brand"
                            onClick={this.getPage}
                            style={{ cursor: 'pointer' }}>
                            Create
                        </NavLink>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
                        </div>
                        <Input />
                        <button
                            className="btn btn-danger ms-2 me-2"
                            onClick={Logout}>
                            Log out
                        </button>
                    </div>
                </nav>
                <Provider store={configureStore}>{this.state.page}</Provider>
            </div>
        );
    }
}

export default NavBar;
