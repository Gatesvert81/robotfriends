import React, { Component } from 'react';
import CardList from './CardList.js';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
    constructor() {
        super()1
        this.state = {
            robots: [],
            serchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>  {this.setState({ robots: users })});
    }

    render() {
        return (
            <div className='tc' >
                <h1 className='f2' > RoboFriends</h1>
                <SearchBox />
                <CardList robots={this.state.robots} />
            </div>
        );
    }   
}

export default App; 