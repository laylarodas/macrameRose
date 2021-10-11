import React from 'react';


const UserList = (props) => {
    return ( 
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.userName}</td>
            <td>{props.email}</td>
        </tr>
    );
}
 
export default UserList;