import React, { Component } from 'react';
import UserList from './UserList';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			usersList:[]
		}
	}

	getUsers(){
        fetch('/api/users').then(r=>r.json()).then(respuesta=>{
            this.setState({usersList:respuesta.data})
        })
    }

    componentDidMount(){
        this.getUsers();
    }

	render() { 
		return ( 

			<React.Fragment>
				<div className="container-fluid">
						 {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the users in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>UserName</th>
                                            <th>Email</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>UserName</th>
                                            <th>Email</th>
										</tr>
									</tfoot>
									<tbody>
										{
											this.state.usersList.map((user,i) => {
												return <UserList key={i} {...user} />
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
				</div>
				    
        	</React.Fragment>
    	)
	}
}
 
export default User;
