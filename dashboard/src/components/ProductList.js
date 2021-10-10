import React from 'react';


const ProductList = (props) => {
    return ( 
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.discount}</td>
            <td>{props.description}</td>
        </tr>
    );
}
 
export default ProductList;