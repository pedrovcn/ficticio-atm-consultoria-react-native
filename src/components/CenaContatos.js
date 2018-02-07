import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
        <View style={styles.general}>
            <StatusBar backgroundColor='#61BD8C' />

            <BarraNavegacao voltar nav={this.props.nav} cor='#61BD8C' />

            <View style={styles.cabecalho}>
                <Image source={detalheContatos} />
                <Text style={styles.titulo}>Contatos</Text>
            </View>

            <View style={styles.detalheContatos}>
                <Text style={styles.texto}>TEL: (61) 3222-2222</Text>
                <Text style={styles.texto}>CEL: (61) 999-999-999</Text>
                <Text style={styles.texto}>EMAIL: contato@atmconsultoria.com.br</Text>
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
        color: '#61BD8C',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 40

    },
    detalheContatos: {
        marginTop: 40
    },
    texto: {
        fontSize: 18,
        marginLeft: 25
    }
});
