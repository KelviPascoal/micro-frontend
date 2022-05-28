import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'reactstrap'
import './app.css'

export function App() {
    console.log('deu certo!');

    // MF

    return (
        <Router>
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto">
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/">Contact</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <h1>App</h1>
            </div>
        </Router>
    )
}