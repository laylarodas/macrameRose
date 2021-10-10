import React from 'react';
import imagenFondo from '../assets/images/collar2.jpg';
import CategoriesInDb from './CategoriesInDb';
import ContentRowProduct from './ContentRowProduct';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard Macramé Rose</h1>
					</div>
				
					{/*<!-- Content Row -->*/}
					<ContentRowProduct />
					{/*<!-- End products in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Collar Negro "/>
									</div>
									<p>COLLAR MICRO MACRAMÉ CON PIEDRAS HERMOSAS. BOHO-CHIC</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last product in Data Base -->*/}

						{/*<!-- Categories in DB -->*/}
						<CategoriesInDb />

						{/*<!--End Categories In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;