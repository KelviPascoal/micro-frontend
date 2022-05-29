import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'reactstrap';
import './app.css';
const HomePage = React.lazy(() => import ("HomeApp/HomePage"));
const ContactPage = React.lazy(() => import ("ContactApp/ContactPage"));

export function App() {
    console.log('deu certo!');



    return (
        <Router>
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto">
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/contatos">Contact</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <h1>App</h1>
            </div>
            <Routes>
                <Route index element={<Suspense fallback={<p> Loading...</p>}><HomePage /></Suspense>} />
                <Route path="/contatos" element={<Suspense fallback={<p> Loading...</p>}><ContactPage /></Suspense>} />
            </Routes>
        </Router>
    )
}