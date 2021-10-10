import React, { Component } from 'react';
import Category  from './Category';

class CategoriesInDb extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categoriesList: [],
            fondoCaja:''
         }
    }

    getCategories(){
        fetch('/api/categories').then(r=>r.json()).then(respuesta=>{
            this.setState({categoriesList:respuesta.data})
        })
    }

    componentDidMount(){
        this.getCategories();
    }


    

    toggleFondo = () =>{
        if(this.state.fondoCaja === ''){
            this.setState({fondoCaja:'bg-secondary'})
        }else {
            this.setState({fondoCaja:''})
        }
        //let fondo = document.querySelector('.colorFondo');
        //fondo.classList.toggle("bg-secondary");
        //console.log(fondo);
     
    }
    //si a toggleFondo no le pongo el arrow function, debo poner el arrow function en el evento 
    render() { 
        return ( 
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.toggleFondo}>Categories</h6>
                        </div>
                        <div className={`card-body colorFondo ${this.state.fondoCaja}`}>
                            <div className="row">
                                {
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Category  {...category}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
            </React.Fragment>
        );
    }
}
 
export default CategoriesInDb;