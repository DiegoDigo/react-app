import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './stylers/card.css';

export default class Card extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            teste: [{'msg':'teste'},{'msg':'teste'},{'msg':'teste'},{'msg':'teste'}],
        }      
    }


    render () {
        return (
            <div className="container">
                <div class="row">
                    {
                        this.state.teste.map((msg) => {
                            return (                          
                                <div className="col s12 m4">
                                <div className="card-panel grey lighten-5 z-depth-1">
                                    <div className="row valign-wrapper">
                                    <div className="col s2">
                                        <h4 className="cardimg">12</h4>
                                    </div>
                                    <div className="col s10">
                                        <span className="black-text">
                                            This is a square image. Add the "circle" className to it to make it appear circular.
                                        </span>
                                    </div>
                                    </div>
                                    </div>
                                
                                </div>                                
                            )
                        })
                    }                
                </div>
            </div>
        )
    }
}
