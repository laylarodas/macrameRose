import React from 'react';
import ContentRowProduct from './ContentRowProduct';
import ContentRowCenter from './ContentRowCenter';

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
					<ContentRowCenter />
					{/*<!-- Content Row Last product in Data Base End Categories In Db -->*/}
					
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;