import * as React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, ModalHeader, Modal, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface State{
    isNavOpen: boolean;
}

export interface Props {
}

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/playground'><span className="fa fa-home fa-lg"></span> Playground</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/designer'><span className="fa fa-info fa-lg"></span> Designer</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Lab Game</h1>
                                <p>Our lab game maker and player.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;