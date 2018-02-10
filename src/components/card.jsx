import React, { Component } from 'react';

import './stylers/card.css';

export default class CardDia extends Component {
    
    constructor (props) {
        super(props);

        this.excluir_dia = this.excluir_dia.bind(this);

        this.state = {
            teste: [{'dia':12,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'teste de informaçao', 'horario_saida':'18:00'},            
            {'dia':13,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'testando corretamente o card para ver os caracteres passaram de 150 , se nao ele substitui por 3 ponts ', 'horario_saida':'18:00'},
            {'dia':14,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'batida laterial', 'horario_saida':'18:00'},
            {'dia':15,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'sdsd', 'horario_saida':'18:00'},
            {'dia':16,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'teste de informaçao', 'horario_saida':'18:00'},            
            {'dia':17,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'asdasda', 'horario_saida':'18:00'},
            {'dia':18,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'batida laterial', 'horario_saida':'18:00'},
            {'dia':19,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'asdada', 'horario_saida':'18:00'},
            {'dia':20,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'teste de informaçao', 'horario_saida':'18:00'},            
            {'dia':21,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'adadsa', 'horario_saida':'18:00'},
            {'dia':22,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'batida laterial', 'horario_saida':'18:00'},
            {'dia':23,'linha':'Santana / Jaragua','horario_entrada':'04:30', 'obs':'asdasdasd', 'horario_saida':'18:00'}],
        }      
    }


    excluir_dia = (e) => {      
        console.log(e)  
        e.preventDefault();
        alert('funcionou');
    }


    render () {
        return (
                <div>
                {
                    this.state.teste.map( teste => {
                        return(      
                            <div className="col s12 m6 l3" key={teste.dia}>                            
                            <div className="card small">
                              <div className="card-content ">
                                <div className="card__date">
                                  <span className="card__date__day">{ teste.dia}</span>
                                  <span className="card__date__month">Dez</span>
                                </div>                                
                                <span className="card-title grey-text text-darken-4"><h4>{ teste.linha }</h4></span>                                                  
                                <h5 className="card-subtitle grey-text text-darken-2">Carro: <small>7878</small></h5>
                                <div className="row">
                                    <div className="text_obs">
                                        <div>                                        
                                        {teste.obs.length > 75 ?
                                        (
                                            <div>
                                                {`${teste.obs.substring(0, 50)}...`}
                                            </div>
                                        ) :
                                        <p>{teste.obs}</p>
                                    }</div>
                                    </div>                                    
                                    <div className="col s6 center">
                                        <span className="text-darken-2 card-info hours"><i className="small material-icons">alarm</i><time>{ teste.horario_entrada }</time></span>
                                    </div>
                                    <div className="col s6 center">
                                    <span className="text-darken-2 card-info hours"><i className="small material-icons">alarm</i><time>{ teste.horario_saida }</time></span>
                                    </div>
                                </div>
                              </div>
                              <div className="card-action">
                                <a href="" ><i className="material-icons left small">add_circle_outline</i></a>
                                <a href="" onClick={ this.excluir_dia }><i className="material-icons right small">delete</i></a>
                                <a href="" ><i className="material-icons right small">mode_edit</i></a>                                
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
