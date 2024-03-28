import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Post from './components/Post';
import Edit from './components/Edit';
import Display from "./components/Display";
import {Nav,} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Retaurants</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href={'/post'}>Create</Nav.Link>
                            <Nav.Link href={'/view'}>View</Nav.Link>
                        </Nav>
                    </Navbar>
                    <br></br>
                    <Switch>
                        <Route exact path='/post' component={Post}/>
                        <Route exact path='/view' component={Display}/>
                        <Route exact path='/edit' component={Edit}/>

                    </Switch>

                </div>
            </Router>
        );
    }


}

export default App;
