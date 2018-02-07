import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
        <View style={styles.general}>
            <StatusBar backgroundColor='#B9C941' />
            <BarraNavegacao voltar nav={this.props.nav} cor='#B9C941' />
            <View style={styles.cabecalho}>
                <Image source={detalheCliente} />
                <Text style={styles.titulo}>Nossos clientes</Text>
            </View>
            
            <View style={styles.detalheCliente}>
                <Image source={cliente1} />
                <Text style={styles.texto}>Lorem Ipsum dolor sit amet</Text>
            </View>
            
            <View style={styles.detalheCliente}>
                <Image source={cliente2} />
                <Text style={styles.texto}>Lorem Ipsum dolor sit amet</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    general: {
        flex: 1,
        backgroundColor: '#fff'
    },
    cabecalho: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    titulo: {
        color: '#B9C941',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 40
    },
    detalheCliente: {
        padding: 20
    },
    imgs: {
        marginLeft: 20
    },
    texto: {
        fontSize: 18,
        marginLeft: 25
    }
});
