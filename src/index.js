import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component{
	render(){
		return(
			<h1>it´s workimg</h1>
		);
	}
}
const app= document.getElememtById('app');
ReactDOM.render(<Layout />,app);