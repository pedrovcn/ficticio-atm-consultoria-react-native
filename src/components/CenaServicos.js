import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={styles.general}>
                <StatusBar backgroundColor='#19D1C8' />

                <BarraNavegacao voltar nav={this.props.nav} cor='#19D1C8' />

                <View style={styles.cabecalho}>
                    <Image source={detalheServicos} />
                    <Text style={styles.titulo}>Nossos Serviços</Text>
                </View>

                <View style={styles.detalheServico}>
                    <Text style={styles.texto}>- Consultoria</Text>
                    <Text style={styles.texto}>- Processos</Text>
                    <Text style={styles.texto}>- Acompanhamento de projetos</Text>
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
        color: '#19D1C8',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 40

    },
    detalheServicos: {
        marginTop: 30
    },
    texto: {
        fontSize: 18,
        marginHorizontal: 15
    }
});
