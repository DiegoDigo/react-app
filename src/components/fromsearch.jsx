import React, { Component } from 'react';
import { Row , Input, Button} from 'react-materialize'

import './stylers/filtros.css';


export default class FromSearch extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            mes_atual: props.mes,
        }      
    }



    changeMount = (e) => {
        console.log(e.target.value)
    }


    render () {
        return (
            <div>                
            <Row>
                <form>
                    <Input placeholder="Ex Santana ou 4444" s={10} label="Pesquise por linha ou numero de carro"/>
                    <Button waves='light' className="button_alin" s={2} >Pesquisar</Button>
                </form>
            </Row>            
            <Row>
                <Input s={6} type='select' label="Mes" defaultValue={ this.state.mes_atual } onChange={ this.changeMount }>                
                    <option value='1'>Janeiro</option>
                    <option value='2'>Fevereiro</option>
                    <option value='3'>Março</option>
                    <option value='4'>Abril</option>
                    <option value='5'>Maio</option>
                    <option value='6'>Junho</option>
                    <option value='7'>Julho</option>
                    <option value='8'>Agosto</option>
                    <option value='9'>Setembro</option>
                    <option value='10'>Outubro</option>
                    <option value='11'>Novembro</option>
                    <option value='12'>Dezembro</option>
                </Input>
                <Input s={6} type='select' label="Ano" defaultValue='2'>
                    <option value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                </Input>
            </Row>
            </div>
        )
    }
}
