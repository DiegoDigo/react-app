import React, { Component } from 'react';

import './stylers/card.css';

export default class CardDia extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            teste: [{'dia':12,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obj':'', 'horario_saida':'18:00'},
            {'dia':13,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obj':'batida laterial', 'horario_saida':'18:00'},
            {'dia':14,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obj':null, 'horario_saida':'18:00'},
            {'dia':15,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obj':'batida laterial', 'horario_saida':'18:00'},
            {'dia':16,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obj':null, 'horario_saida':'18:00'}],
        }      
    }


    render () {
        return (
                <div>
                {
                    this.state.teste.map( teste => {
                        return(      
                            <div className="col s12 m6 l3">                            
                            <div className="card">
                              <div className="card-content white-text">
                                <div className="card__date">
                                  <span className="card__date__day">{ teste.dia}</span>
                                  <span className="card__date__month">Dez</span>
                                </div>                                
                                <span className="card-title grey-text text-darken-4">{ teste.linha }</span>                  
                                <p className="card-subtitle grey-text text-darken-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...lacus eleifend lacinia... go!</p>
                                <span className="text-darken-2 card-info"><i className="small material-icons">label</i>&nbsp;lindy hop, balboa, charleston</span>
                              </div>
                              <div className="card-action">
                                <a href=""><i className="material-icons">&nbsp;language</i>Editar</a>
                                <a href="" className="card-action-right"><i className="material-icons">&nbsp;room</i>Exluir</a>
                              </div>
                            </div>
                            </div>
                        )
                    })
                }                
            </div>
                  
        )
    }
}
