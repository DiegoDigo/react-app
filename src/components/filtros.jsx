import React, { Component } from 'react'
import { Collapsible, CollapsibleItem, Row } from 'react-materialize';

import FromSearch from '../components/fromsearch';

export default class Filtros extends Component {

  constructor(props) {
    super(props);

    this.pegar_mese = this.pegar_mese.bind(this);

    this.state = {
       mes: 0,       
    }
  }




  pegar_mese = () => {
      const data = new Date();
      console.log(data.getMonth());
      this.setState({
          mes: data.getMonth() + 1
      })
  }


    componentWillMount() {
      this.pegar_mese();
    }

    render() {
        return (          
            <Collapsible defaultActiveKey={1}>
	              <CollapsibleItem header='Filtros' icon='add' >
		                <FromSearch mes={this.state.mes}/>
	              </CollapsibleItem>	
            </Collapsible>        
        )
    }

}
