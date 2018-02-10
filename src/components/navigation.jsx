import React, { Component } from 'react'
import { Navbar, NavItem, Icon, Dropdown} from 'react-materialize';

import './stylers/navigation.css'


export default class Navigation extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            usuario: 'Diego',
        }
        
    }

    render() {
        return (
            <Navbar brand='ManagerHours' right className="navbar_my">
                <NavItem href=''>Dashboard<Icon left>dashboard</Icon></NavItem>
                <Dropdown trigger={
                    <NavItem>Usuario<Icon left>account_circle</Icon></NavItem>                
                    }>
                    <NavItem>one</NavItem>
                    <NavItem>two</NavItem>
                    <NavItem divider />
                    <NavItem>three</NavItem>
                </Dropdown>
                
            </Navbar>
        )
    }

}
