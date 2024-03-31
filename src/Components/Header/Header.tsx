import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Images/logoo.svg'
import '../../Styles/Header.scss'
import React from "react";
function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" className='nav'>
            <div className='container'>
                <img src={logo} alt="" />
                <div className='item'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='icon' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='menu'>
                            <a href="#id1">неисправности</a>
                            <a href="#id2">Цены</a>
                            <a href="#id3">бренды</a>
                            <a href="#id4">адрес</a>
                            <button><a href="tel: +7 925 868-12-96">+7 925 868-12-96</a></button>
                        </Nav>
                    </Navbar.Collapse>
                </div>

            </div>

        </Navbar>
    );
}

export default CollapsibleExample;