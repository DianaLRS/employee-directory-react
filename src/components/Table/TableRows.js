import React from "react";

function TableRows(props){


return(
<tbody>
        <tr>
<th scope="row"></th>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.dob}</td>
        </tr>
</tbody>

)

}


export default TableRows;