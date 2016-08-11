import React, {Component} from 'react';
import {Link} from 'react-router'

import NavLink from './NavLink';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello, React Router!</h1>
                <ul role='nav'>
                    <li><NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/Repos">Repos</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;