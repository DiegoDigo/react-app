import React, { Component } from 'react';
import { Row } from 'react-materialize'

import './stylers/home.css';

import CardDias from '../components/card'
import Navigation from '../components/navigation';

export default class Home extends Component {
    
    constructor (props) {
        super(props);

        this.state = {

        }      
    }


    render () {
        return (
            <div>
                <Navigation />
                <Row>            
                    <div id="container">
                        <CardDias />  
                    </div>
                </Row>
            </div>
        )
    }
}
