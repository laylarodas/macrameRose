import React ,{useEffect,useState} from 'react';

function ContentRowTop(){

    const [products,setProducts] = useState()
	const [users,setUsers] = useState()
    const [categories,setCategories] = useState()

    const fetchApi =  async () => {
        const response1= await fetch('/api/products');
        const response1JSON = await response1.json();
        setProducts(response1JSON);
        const response2= await fetch('/api/users');
        const response2JSON = await response2.json();
        setUsers(response2JSON);
        const response3= await fetch('/api/categories');
        const response3JSON = await response3.json();
        setCategories(response3JSON);
    }

    useEffect(() => {
        fetchApi();
    },[])

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
        
            <div className="col-md-4 mb-4">
				<div className="card border-left-primary shadow h-100 py-2">
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de Productos</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{ !products ? 'Cargando...' : products.data.length}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*<!-- Total awards -->*/}
			<div className="col-md-4 mb-4">
				<div className="card border-left-success shadow h-100 py-2">
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total de Usuarios</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{!users ? 'Cargando...' : users.data.length}</div>
							</div>	
						</div>
					</div>
				</div>
			</div>

			{/*<!-- Actors quantity -->*/}
			<div className="col-md-4 mb-4">
				<div className="card border-left-warning shadow h-100 py-2">
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de Categorías</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{!categories ? 'Cargando...' : categories.data.length}</div>
							</div>
						</div>
					</div>
				</div>
			</div>    
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;