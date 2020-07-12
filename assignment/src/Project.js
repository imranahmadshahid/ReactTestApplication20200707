import React from 'react';
import Moment from 'moment';


export class Project extends React.Component
{
	componentDidMount(){
		window.loadDataTable();
	}
	
	render()
	{
		Moment.locale('en');
		return (
			<table id="example" className="display nowrap">
				<thead>
					<tr>
						<th>Description</th>
						<th>Project</th>
						<th>Start Date</th>
						<th>Category</th>
						<th>Responsible</th>
						<th>Savings</th>
						<th>Currency</th>
						<th>Complexity</th>
					</tr>
				</thead>
				<tbody>
				{
					this.props.data.map(function(project,i){
						return <tr key={i}>
							<td>{project.description}</td>
							<td>{project.project}</td>
							<td>{Moment(project["start date"]).format('DD.MM.YYYY')}</td>
							<td>{project.category}</td>
							<td>{project.responsible}</td>
							<td>{project["savings amount"]}</td>
							<td>{project.currency === "NULL"? "": project.currency}</td>
							<td>{project.complexity}</td>
						</tr>
					})
				}
				</tbody>
			</table>
		);
	}
}
