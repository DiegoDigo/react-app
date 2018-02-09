import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, Navbar, NavItem } from 'react-materialize';
import './stylers/navigation.css'


export default class Navigation extends Component {
    
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Navbar brand='logo' right>
                <NavItem>Teste</NavItem>
             </Navbar>
        )
    }

}

Navigation.PropTypes = {

}