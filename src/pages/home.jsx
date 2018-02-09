import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './stylers/home.css';

import Card from '../components/card'
import Navigation from '../components/navigation';
import Tabs from '../components/tabs';

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
                <Tabs />
                <Card />
            </div>
        )
    }
}

Home.propTypes = {
    
}
