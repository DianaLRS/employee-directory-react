
import React from "react";
import TableRows from "./TableRows";
function Table (){

return(
 <div class="container">            
 <table class="table table-striped">
   <thead>
     <tr>
       <th>First Name</th>
       <th>Lastname</th>
       <th>Email</th>
       <th>Phone</th>
       <th>DOB</th>
     </tr>
   </thead>
   <TableRows/>
   </table>
</div>
)

}

export default Table; 