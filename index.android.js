import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class app5 extends Component {
	render() {
		return (
			<Navigator 
				initialRoute={{
				id: 'cenaPrincipal'
				}}
				renderScene={
				(route, navigator) => {
					switch (route.id) {
					case 'cenaPrincipal': 
						return (<CenaPrincipal nav={navigator} />);

					case 'cenaClientes':
						return (<CenaClientes nav={navigator} />);

					case 'cenaContatos':
						return (<CenaContatos nav={navigator} />);

					case 'cenaEmpresa':
						return (<CenaEmpresa nav={navigator} />);

					case 'cenaServicos':
						return (<CenaServicos nav={navigator} />);

					default:
						return false;
					}
				}
				}
			/>
		);
	}
}

AppRegistry.registerComponent('app5', () => app5);
