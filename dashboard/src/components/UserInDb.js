import React, { useState, useEffect } from 'react';
import UserList from './UserList';

function UserInDb() {
    const [users, setUsers] = useState([]);

    useEffect (() => {
        fetch('/api/users')
        .then(response => response.json())
        .then(response=>{
            setUsers(response.data)
        })
        .catch(error => console.error(error));
    }, []);

    useEffect(()=>{ 
        console.log('%cse actualizo el componente','color:yellow')
    },[users])

    useEffect (()=>{
        return () => console.log('%cse desmonto el componente','color: red');
    },[])

    return(
        <React.Fragment>
				<div className="container-fluid">
						 {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Todos los Usuarios</h1>
					
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
											users.map((user,i) => {
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


export default UserInDb;
