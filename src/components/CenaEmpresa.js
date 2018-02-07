import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={styles.general}>
                <StatusBar backgroundColor='#EC7148' />

                <BarraNavegacao voltar nav={this.props.nav} cor='#EC7148' />

                <View style={styles.cabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.titulo}>A Empresa</Text>
                </View>

                <View style={styles.detalheEmpresa}>
                    <Text style={styles.texto}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec non suscipit risus.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos.
                        Pellentesque habitant morbi tristique senectus et netus et 
                        malesuada fames ac turpis egestas.
                        Quisque nec varius ex, vitae lacinia tellus. Fusce sodales 
                        sit amet leo ut sollicitudin.
                    </Text>
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
        color: '#EC7148',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 40

    },
    detalheEmpresa: {
        marginTop: 30
    },
    texto: {
        fontSize: 18,
        marginHorizontal: 15
    }
});
