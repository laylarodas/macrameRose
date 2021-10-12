import React, { useState, useEffect, useRef } from 'react';
import Category  from './Category';

function CategoriesInDb () {
    
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('/api/categories')
        .then(response => response.json())
        .then(response => {
            setCategories(response.data)
        })
        .catch(error => console.error(error));
    },[]);

    useEffect(()=>{
        console.log('%cse actualizo el componenete','color:yellow')
    },[categories]);

    useEffect(()=>{
        return () => console.log('%cse desmonto el componenete')
    },[])


    const fondoCaja = useRef();
    const toggleFondo = () =>{
        
        fondoCaja.current.classList.toggle("bg-secondary");
        //console.log(fondo);
     
    }
    
     
    return ( 
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={toggleFondo}>Categorias</h6>
                    </div>
                    <div className={`card-body colorFondo`} ref={fondoCaja}>
                        <div className="row">
                            {
                                categories.map((category,index)=>{
                                    return  <Category  {...category}  key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
       
        </React.Fragment>
    )
}
 
export default CategoriesInDb;