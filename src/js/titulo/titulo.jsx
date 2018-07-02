import React from 'react';

class Titulo extends React.Component {
	constructor(props){
		super(props);
		this.state = {hora: new Date()};
	}

	componentDidMount(){
		this.horaID = setInterval(
			()=> this.atualizarSegundos(),
			1000
		);
	}

	atualizarSegundos(){
		this.setState({hora: new Date()});
	}

	componentWillUnMont(){
		clearInterval(this.horaID);
	}

	render(){
		return <h1>Sitesma de busca {this.state.hora.toLocaleTimeString()}</h1>;
	}
}

export default Titulo;
