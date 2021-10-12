import React , {useState, useEffect} from 'react';
import image from '../assets/images/collar2.jpg';

function LastProductInDb(){

    const [products,setProducts] = useState()
    let [lastProduct, setLastProduct] = useState();

    const fetchApi =  async () => {
        const response1= await fetch('/api/products');
        const response1JSON = await response1.json();
        let id = (response1JSON.data.length - 1)
        let lastProductTest = response1JSON.data[id]
        console.log(lastProductTest);
        setLastProduct(response1JSON.data[id]);
    }

    useEffect(() => {
        fetchApi();
    },[])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Producto creado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{!lastProduct ? 'Cargando...' : lastProduct.name}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
