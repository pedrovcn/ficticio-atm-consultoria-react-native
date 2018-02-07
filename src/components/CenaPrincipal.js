import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableHighlight
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
    <View style={styles.general}>
        <StatusBar backgroundColor='#CCC' />
        <BarraNavegacao />

        <View style={styles.logo}>
            <Image source={logo} />
        </View>
        
        <View style={styles.menu}>
           
            <TouchableHighlight 
                underlayColor={'#B9C941'}
                activeOpacity={0.3}
                onPress={ 
                    () => {
                        this.props.nav.push({
                            id: 'cenaClientes'
                        });
                    }
                } 
            >
                <Image source={menuCliente} style={styles.imgMenu} />
            </TouchableHighlight>

            <TouchableHighlight 
                underlayColor={'#61BD8C'}
                activeOpacity={0.6}
                onPress={ 
                    () => {
                        this.props.nav.push({
                            id: 'cenaContatos'
                        });
                    }
                } 
            >
                <Image source={menuContato} style={styles.imgMenu} />
            </TouchableHighlight>
        </View>

        <View style={styles.menu}>
            <TouchableHighlight 
                underlayColor={'#EC7148'}
                activeOpacity={0.6}
                onPress={ 
                    () => {
                        this.props.nav.push({
                            id: 'cenaEmpresa'
                        });
                    }
                } 
            >
                <Image source={menuEmpresa} style={styles.imgMenu} />
            </TouchableHighlight>

            <TouchableHighlight 
                underlayColor={'#19D1C8'}
                activeOpacity={0.6}
                onPress={ 
                    () => {
                        this.props.nav.push({
                            id: 'cenaServicos'
                        });
                    }
                } 
            >
                <Image source={menuServico} style={styles.imgMenu} />
            </TouchableHighlight>
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
    logo: {
        alignItems: 'center',
        marginVertical: 30
    },
    menu: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    imgMenu: {
        margin: 15
    }
});
