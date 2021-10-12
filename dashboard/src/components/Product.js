import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

function Product (){
	const [products, setProducts] = useState([]);


	useEffect(()=>{
		fetch('/api/products')
		.then(response => response.json())
		.then(response => {
            setProducts(response.data)
        })
		.catch(error => console.error(error));
	},[]);

	useEffect(()=>{
        console.log('%cse actualizo el componenete','color:yellow')
    },[products]);

    useEffect(()=>{
        return () => console.log('%cse desmonto el componenete')
    },[])

	return ( 

		<React.Fragment>
			<div className="container-fluid">
					 {/*<!-- PRODUCTS LIST -->*/}
				<h1 className="h3 mb-2 text-gray-800">Todos los productos</h1>
				
				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Precio</th>
										<th>Descuento</th>
										<th>Descripción</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Precio</th>
										<th>Descuento</th>
										<th>Descripción</th>
									</tr>
								</tfoot>
								<tbody>
									{
										products.map((product,i) => {
											return <ProductList key={i} {...product} />
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
 
export default Product;
