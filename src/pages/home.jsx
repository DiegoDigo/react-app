import React, { Component } from 'react';
import { Row, Button } from 'react-materialize'

import './stylers/home.css';

import CardDias from '../components/card'
import Navigation from '../components/navigation';
import Filtros from '../components/filtros';


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
                <div id="container"> 
                    <Filtros />
                </div>                
                <Row>            
                    <div id="container">                        
                        <CardDias />  
                    </div>
                </Row>
                
                <Button floating fab='vertical' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}/>
            </div>
        )
    }
}
