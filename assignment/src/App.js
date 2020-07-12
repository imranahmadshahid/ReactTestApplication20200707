import React from 'react';
import './App.css';
import {Project} from './Project.js'


export class App extends React.Component{
	
	constructor()
	{
		super();
		this.state = {
			error: null,
			isLoaded: false,
			data: []
		};
	}
	
	componentDidMount(){
	   fetch("https://sievo-react-assignment.azurewebsites.net/api/data")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        }).catch(
        (error) => {
          this.setState({
            isLoaded: true,
			error:error.message
          });
		  console.log(error.message);
		});
	}
	
	render()
	{
		const { error, isLoaded, data } = this.state;
		
		if (error) 
			return <div className="App">Error:  {error}</div>;
		
		else if (!isLoaded) 
			return <div className="App"><b>Loading...</b></div>;
	
		else{
			return (
				<div className="App">
					<h1>Assignent</h1>
					<Project data={this.state.data}/>
				</div>
			);
		}
	}
}

