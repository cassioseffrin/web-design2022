

import React, { } from 'react'
import Menu from './Menu';
import Item from './Item';
import Repositories from './Repositories';

class BemVindo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pessoa: { nome: 'buscando...' } };
    }
    buscarAPI() {
        return { nome: 'Cassio', sexo: 'Masculino' };
    }
    componentDidUpdate(prev, current) {
        // if (prev.pessoa != current.pessoa){}
        console.log('o componente esta atualializando...');

    }
    // componentWillMount() {
    //     console.log('componentWillMount...');
    // }
    componentDidMount() {
        console.log('componentDidMount...');
        setTimeout(() => {
            let data = this.buscarAPI();
            this.setState({ pessoa: data })
        }, 2000);
    }
    render() {


        return (
            <>
                <h1>Hello {this.state?.pessoa?.nome ?? 'buscando'}</h1>
                {/* <Menu>
                    <Item apertou={(texto) => { console.log(texto) }}> Cadastro </Item>
                    <Item apertou={(texto) => { console.log(texto) }}> Relatorios </Item>
                    <Item apertou={(texto) => { console.log(texto) }}> Ajuda </Item>
                </Menu> */}
                {/* <BemVindo /> */}
                <Repositories />
            </>
        );




    }
}

export default BemVindo;